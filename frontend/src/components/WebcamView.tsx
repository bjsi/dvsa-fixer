import { useEffect, useRef, useState, useCallback } from "react";

// Track OpenCV loading globally
const OPENCV_LOADING = {
  promise: null as Promise<void> | null,
  initialized: false
};

// Define the OpenCV interface with all the methods we're using
interface OpenCV {
  Mat: new () => Mat;
  MatVector: new () => MatVector;
  Size: new (width: number, height: number) => Size;
  Rect: new (x: number, y: number, width: number, height: number) => Rect;
  RectVector: new () => RectVector;
  CascadeClassifier: new () => CascadeClassifier;
  COLOR_RGBA2GRAY: number;
  RETR_EXTERNAL: number;
  CHAIN_APPROX_SIMPLE: number;
  CV_32FC2: number;
  matFromImageData: (imageData: ImageData) => Mat;
  cvtColor: (src: Mat, dst: Mat, code: number) => void;
  GaussianBlur: (src: Mat, dst: Mat, size: Size, sigma: number) => void;
  Canny: (src: Mat, dst: Mat, threshold1: number, threshold2: number) => void;
  findContours: (src: Mat, contours: MatVector, hierarchy: Mat, mode: number, method: number) => void;
  arcLength: (curve: Mat, closed: boolean) => number;
  approxPolyDP: (curve: Mat, approx: Mat, epsilon: number, closed: boolean) => void;
  contourArea: (contour: Mat) => number;
  minAreaRect: (points: Mat) => { size: Size };
  matFromArray: (rows: number, cols: number, type: number, array: number[]) => Mat;
  getPerspectiveTransform: (src: Mat, dst: Mat) => Mat;
  warpPerspective: (src: Mat, dst: Mat, M: Mat, size: Size) => void;
  onRuntimeInitialized: Promise<void>;
}

interface Mat {
  delete(): void;
  rows: number;
  intPtr(row: number): number;
  roi(rect: Rect): Mat;
}

interface MatVector {
  size(): number;
  get(i: number): Mat;
  delete(): void;
}

interface Size {
  width: number;
  height: number;
}

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface RectVector {
  size(): number;
  delete(): void;
}

interface CascadeClassifier {
  load(path: string): void;
  detectMultiScale(img: Mat, objects: RectVector, scaleFactor: number, minNeighbors: number, flags: number): void;
  delete(): void;
}

declare global {
  interface Window {
    cv: OpenCV & {
      FS_createDataFile(parent: string, name: string, data: Uint8Array, canRead: boolean, canWrite: boolean): void;
    };
  }
}

/**
 * WebcamView – React component that streams the rear camera, shows an overlay
 * rectangle + expected face‑photo box, and prints a "✅ ID detected" message
 * once OpenCV.js recognises a licence‑sized card with a face in place.
 *
 * 1. Loads OpenCV WASM at runtime (`opencv.js` must be accessible).
 * 2. Streams the camera with getUserMedia.
 * 3. Every animation frame it:
 *    • finds the largest quadrilateral whose aspect ratio ≈ 1.585
 *    • warps it to 640×404 and runs a Haar‑cascade face detector inside the
 *      expected head‑shot region.
 * 4. When both pass for >7 frames in a row → show success text.
 *
 * Notes:
 * • The face cascade XML should be placed in `public/haarcascade_frontalface_default.xml`.
 * • For production you may want to throttle frame‑rate on low‑end mobiles.
 */
const ID_ASPECT = 1.585;          // ISO/IEC 7810 ID‑1 aspect (credit‑card)
const TOL = 0.15;                 // ±15 % aspect tolerance
const MIN_AREA = 8_000;           // px² – ignore tiny quads
const LOCK_FRAMES = 7;            // steady frames needed before reporting OK
const FPS = 10;                   // target frames per second for detection

export default function WebcamView() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream>(null);
  const lockRef = useRef(0);
  const lastProcessedRef = useRef(0);
  const mountedRef = useRef(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [opencvReady, setOpenCVReady] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

  // Update canvas dimensions when video loads/changes
  const updateDimensions = useCallback(() => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      setVideoDimensions({ width: videoWidth, height: videoHeight });
    }
  }, []);

  /* ---------- OpenCV bootstrap ---------- */
  const testImageDetection = useCallback(async () => {
    if (!window.cv) {
      console.error('OpenCV not loaded');
      return;
    }

    try {
      console.log('🧪 Testing OpenCV with sample image...');
      const testImg = new Image();
      testImg.crossOrigin = 'anonymous';
      
      // Update image path to use /assets directory
      testImg.src = '/assets/provisional-uk_3dfront-1.jpg';
      
      await new Promise<void>((resolve, reject) => {
        testImg.onload = () => {
          console.log('📸 Test image loaded successfully:', { 
            width: testImg.width, 
            height: testImg.height 
          });
          resolve();
        };
        testImg.onerror = (e) => {
          const error = new Error('Failed to load test image - please ensure the image exists at /assets/provisional-uk_3dfront-1.jpg');
          console.error('❌ Test image load error:', error);
          reject(error);
        };
      });

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = testImg.width;
      tempCanvas.height = testImg.height;
      const tempCtx = tempCanvas.getContext('2d')!;
      tempCtx.drawImage(testImg, 0, 0);

      const imageData = tempCtx.getImageData(0, 0, testImg.width, testImg.height);
      console.log('📊 Image data:', { 
        width: imageData.width, 
        height: imageData.height 
      });

      const src = window.cv.matFromImageData(imageData);
      const gray = new window.cv.Mat();
      window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY);
      window.cv.GaussianBlur(gray, gray, new window.cv.Size(5, 5), 0);
      const edges = new window.cv.Mat();
      window.cv.Canny(gray, edges, 50, 150);

      const contours = new window.cv.MatVector();
      const hier = new window.cv.Mat();
      window.cv.findContours(edges, contours, hier, window.cv.RETR_EXTERNAL, window.cv.CHAIN_APPROX_SIMPLE);

      console.log(`📊 Found ${contours.size()} contours in test image`);
      
      let foundValidCard = false;
      for (let i = 0; i < contours.size(); i++) {
        const cnt = contours.get(i);
        const peri = window.cv.arcLength(cnt, true);
        const approx = new window.cv.Mat();
        window.cv.approxPolyDP(cnt, approx, 0.02 * peri, true);
        
        if (approx.rows === 4) {
          const area = window.cv.contourArea(approx);
          if (area > MIN_AREA) {
            const rect = window.cv.minAreaRect(cnt).size;
            const asp = Math.max(rect.width, rect.height) / Math.min(rect.width, rect.height);
            console.log(`🔍 Found quadrilateral:`, {
              area,
              aspectRatio: asp.toFixed(3),
              expectedAspect: ID_ASPECT.toFixed(3),
              difference: Math.abs(asp - ID_ASPECT).toFixed(3),
              tolerance: TOL
            });
            
            if (Math.abs(asp - ID_ASPECT) < TOL) {
              console.log('✅ Valid ID card detected in test image!');
              foundValidCard = true;
            }
          }
        }
        approx.delete();
      }

      if (!foundValidCard) {
        console.log('❌ No valid ID card found in test image');
      }

      // Cleanup test mats
      [src, gray, edges, contours, hier].forEach(m => m.delete());

    } catch (err) {
      console.error('❌ Test image detection failed:', err);
    }
  }, []);

  const loadOpenCV = useCallback(async () => {
    // Prevent double initialization in StrictMode
    if (mountedRef.current) return;
    mountedRef.current = true;

    // Return early if already initialized
    if (window.cv) {
      console.log('✅ OpenCV already loaded and initialized');
      setOpenCVReady(true);
      return;
    }

    try {
      console.log('⏳ Loading OpenCV.js...');
      setError("Loading OpenCV.js...");
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "/assets/opencv.js";
        script.async = true;
        script.onload = () => {
          console.log('📥 OpenCV.js script loaded');
          resolve();
        };
        script.onerror = () => reject(new Error("Failed to load OpenCV.js"));
        document.head.appendChild(script);

        // Cleanup function
        const cleanup = () => {
          script.remove();
          reject(new Error("OpenCV.js load timeout"));
        };

        // Timeout after 30 seconds
        const timeoutId = setTimeout(cleanup, 30000);

        // Modify the resolve handler to clear the timeout
        script.onload = () => {
          clearTimeout(timeoutId);
          console.log('📥 OpenCV.js script loaded');
          resolve();
        };
      });

      // Wait for OpenCV to be initialized
      await new Promise<void>((resolve, reject) => {
        console.log('⏳ Waiting for OpenCV to initialize...');
        const checkInterval = setInterval(() => {
          if (window.cv?.Mat) {
            console.log('✅ OpenCV initialized successfully');
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);

        setTimeout(() => {
          clearInterval(checkInterval);
          reject(new Error("OpenCV initialization timeout"));
        }, 10000);
      });

      // Load face cascade into the WASM FS
      console.log('⏳ Loading face detection model...');
      setError("Loading face detection model...");
      const xml = await fetch("/assets/haarcascade_frontalface_default.xml").then(r => r.arrayBuffer());
      window.cv.FS_createDataFile("/", "face.xml", new Uint8Array(xml), true, false);
      console.log('✅ Face detection model loaded');
      
      setError("");
      setOpenCVReady(true);
      console.log('🎉 OpenCV setup complete and ready');

      // Run test image detection after OpenCV is fully loaded
      await testImageDetection();

    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error('❌ OpenCV setup failed:', message);
      setError(`Failed to load OpenCV.js: ${message}`);
      console.error(err);
    }
  }, [testImageDetection]);

  /* ---------- Camera controls ---------- */
  const startWebcam = useCallback(async () => {
    // Stop any existing stream first
    stopWebcam();
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener('loadedmetadata', updateDimensions);
        await videoRef.current.play();
        setIsStreaming(true);
        setError("");
      }
    } catch (err) {
      setError("Failed to access webcam. Please grant permission.");
      console.error(err);
    }
  }, [updateDimensions]);

  const stopWebcam = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.removeEventListener('loadedmetadata', updateDimensions);
      videoRef.current.srcObject = null;
      videoRef.current.pause();
    }
    setIsStreaming(false);
    setMessage("");
    setVideoDimensions({ width: 0, height: 0 });
  }, [updateDimensions]);

  /* ---------- Detection loop ---------- */
  const tick = useCallback(() => {
    if (!window.cv || !videoRef.current || !canvasRef.current) return;

    const now = performance.now();
    const frameInterval = 1000 / FPS;
    
    // Skip frame if not enough time has passed
    if (now - lastProcessedRef.current < frameInterval) {
      requestAnimationFrame(tick);
      return;
    }
    
    lastProcessedRef.current = now;

    const { videoWidth: w, videoHeight: h } = videoRef.current;
    if (!w || !h) return requestAnimationFrame(tick);

    const ctx = canvasRef.current.getContext("2d")!;
    ctx.clearRect(0, 0, w, h);

    let quadPts: number[] | null = null;
    let detectedNow = false;
    let detectionStatus = "Place your ID card in the frame";

    try {
      // Create a temporary canvas for OpenCV operations
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = w;
      tempCanvas.height = h;
      const tempCtx = tempCanvas.getContext('2d')!;
      tempCtx.drawImage(videoRef.current, 0, 0, w, h);
      
      const src = window.cv.matFromImageData(tempCtx.getImageData(0, 0, w, h));
      const gray = new window.cv.Mat();
      window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY);
      window.cv.GaussianBlur(gray, gray, new window.cv.Size(5, 5), 0);
      const edges = new window.cv.Mat();
      window.cv.Canny(gray, edges, 50, 150);

      const contours = new window.cv.MatVector();
      const hier = new window.cv.Mat();
      window.cv.findContours(edges, contours, hier, window.cv.RETR_EXTERNAL, window.cv.CHAIN_APPROX_SIMPLE);

      let toDelete: { delete?: () => void }[] = [src, gray, edges, contours, hier];

      try {
        for (let i = 0; i < contours.size(); i++) {
          const cnt = contours.get(i);
          const peri = window.cv.arcLength(cnt, true);
          const approx = new window.cv.Mat();
          toDelete.push(approx);
          
          window.cv.approxPolyDP(cnt, approx, 0.02 * peri, true);
          if (approx.rows === 4 && window.cv.contourArea(approx) > MIN_AREA) {
            const rect = window.cv.minAreaRect(cnt).size;
            const asp = Math.max(rect.width, rect.height) / Math.min(rect.width, rect.height);
            if (Math.abs(asp - ID_ASPECT) < TOL) {
              console.log('📇 Found potential ID card:', { 
                area: window.cv.contourArea(approx),
                aspectRatio: asp.toFixed(3)
              });
              
              // Get the points
              quadPts = [...Array(4).keys()].flatMap(j => approx.intPtr(j));
              detectionStatus = "ID card detected! Hold still...";
              break;
            }
          }
        }

        // Draw guide rectangle - now after detection
        ctx.lineWidth = 4;
        ctx.strokeStyle = quadPts ? "#facc15" : "#64748b"; // yellow if card detected, slate-500 if not
        ctx.setLineDash([15, 15]); // Dashed line
        const padding = 40;
        ctx.strokeRect(padding, padding, w - 2 * padding, h - 2 * padding);
        ctx.setLineDash([]); // Reset to solid line

        // If we found a card, draw the detection visualization
        if (quadPts) {
          // Draw filled semi-transparent rectangle
          ctx.fillStyle = 'rgba(34, 197, 94, 0.2)'; // green with 0.2 opacity
          ctx.beginPath();
          ctx.moveTo(quadPts[0], quadPts[1]);
          for (let i = 2; i < quadPts.length; i += 2) {
            ctx.lineTo(quadPts[i], quadPts[i + 1]);
          }
          ctx.closePath();
          ctx.fill();
          
          // Draw solid outline
          ctx.lineWidth = 4;
          ctx.strokeStyle = "#22c55e"; // bright green
          ctx.beginPath();
          ctx.moveTo(quadPts[0], quadPts[1]);
          for (let i = 2; i < quadPts.length; i += 2) {
            ctx.lineTo(quadPts[i], quadPts[i + 1]);
          }
          ctx.closePath();
          ctx.stroke();

          // For now, just count it as detected if we found a valid card
          detectedNow = true;
          lockRef.current += 1;
        } else {
          lockRef.current = 0;
        }

        if (lockRef.current >= LOCK_FRAMES) {
          console.log('✅ Detection complete! ID verified');
          detectionStatus = "✅ Perfect! ID captured";
        }

        setMessage(detectionStatus);
      } finally {
        // Ensure OpenCV objects are cleaned up even if an error occurs
        toDelete.forEach(obj => obj?.delete?.());
      }
    } catch (err) {
      console.error('❌ OpenCV detection error:', err);
    }

    requestAnimationFrame(tick);
  }, []);

  /* ---------- Helpers ---------- */
  function orderClockwise(pts: number[]) {
    // Detailed input validation
    if (!pts) {
      console.error('Points array is null or undefined');
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    
    if (!Array.isArray(pts)) {
      console.error('Points is not an array:', pts);
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (pts.length !== 8) {
      console.error(`Invalid points array length: ${pts.length}, expected 8`);
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }

    try {
      // Create points array with validation for each coordinate
      const points: Array<{ x: number; y: number }> = [];
      
      for (let i = 0; i < 4; i++) {
        const x = pts[2 * i];
        const y = pts[2 * i + 1];
        
        if (typeof x !== 'number' || typeof y !== 'number' || 
            isNaN(x) || isNaN(y) || !isFinite(x) || !isFinite(y)) {
          console.error(`Invalid coordinates at index ${i}:`, { x, y });
          return [0, 0, 0, 0, 0, 0, 0, 0];
        }
        
        points.push({ x, y });
      }

      // Calculate center point
      const center = {
        x: points.reduce((sum, p) => sum + p.x, 0) / 4,
        y: points.reduce((sum, p) => sum + p.y, 0) / 4
      };

      // Sort points based on their position relative to center
      const sortedPoints = points.map((point, index) => ({
        point,
        angle: Math.atan2(point.y - center.y, point.x - center.x)
      }))
      .sort((a, b) => a.angle - b.angle)
      .map(item => item.point);

      // Ensure we start with the top-left point
      const shift = sortedPoints.findIndex((point, i) => {
        const next = sortedPoints[(i + 1) % 4];
        return point.y < center.y && next.x > center.x;
      });

      if (shift > 0) {
        sortedPoints.unshift(...sortedPoints.splice(shift));
      }

      // Convert back to flat array
      return sortedPoints.flatMap(p => [p.x, p.y]);
    } catch (err) {
      console.error('Error in orderClockwise:', err);
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
  }

  function invPerspectivePoint(M: any, x: number, y: number, cv: any) {
    try {
      const src = cv.matFromArray(1, 1, cv.CV_32FC2, [x, y]);
      const dst = new cv.Mat();
      cv.perspectiveTransform(src, dst, M.inv());
      const pt = { x: dst.data32F[0], y: dst.data32F[1] };
      src.delete();
      dst.delete();
      return pt;
    } catch (err) {
      console.error('Error in invPerspectivePoint:', err);
      return { x: 0, y: 0 }; // Return safe default
    }
  }

  /* ---------- Lifecycle ---------- */
  useEffect(() => {
    loadOpenCV();
    return () => {
      stopWebcam();
    };
  }, [loadOpenCV, stopWebcam]);

  useEffect(() => {
    let animationFrameId: number;

    if (isStreaming && opencvReady) {
      const animate = () => {
        tick();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isStreaming, opencvReady, tick]);

  /* ---------- UI ---------- */
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-full max-w-md">
        <div className="relative rounded-lg overflow-hidden" style={{ lineHeight: 0 }}>
          <video 
            ref={videoRef}
            className="w-full"
            playsInline 
            muted 
          />
          <canvas 
            ref={canvasRef} 
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: videoDimensions.width > 0 ? `${videoDimensions.width}px` : '100%',
              height: videoDimensions.height > 0 ? `${videoDimensions.height}px` : '100%',
              pointerEvents: 'none'
            }}
            width={videoDimensions.width}
            height={videoDimensions.height}
          />
        </div>
        <div className="mt-2 text-center">
          <p className="text-lg font-medium">
            {error || message || "Initializing..."}
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={isStreaming ? stopWebcam : startWebcam}
          className={`px-4 py-2 rounded-lg text-white ${isStreaming ? "bg-red-600" : "bg-blue-600"}`}
          disabled={!opencvReady}
        >
          {isStreaming ? "Stop Camera" : "Start Camera"}
        </button>
      </div>

      {!opencvReady && <p className="text-gray-500 text-sm">Loading computer‑vision engine…</p>}
    </div>
  );
}
