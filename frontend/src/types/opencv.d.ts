declare global {
  interface Window {
    cv: {
      Mat: any;
      MatVector: any;
      Size: any;
      Point: any;
      COLOR_RGBA2GRAY: number;
      RETR_EXTERNAL: number;
      CHAIN_APPROX_SIMPLE: number;
      FS_createDataFile: (path: string, filename: string, data: Uint8Array, canRead: boolean, canWrite: boolean) => void;
      matFromImageData: (imageData: ImageData) => any;
      cvtColor: (src: any, dst: any, code: number) => void;
      GaussianBlur: (src: any, dst: any, ksize: any, sigmaX: number) => void;
      Canny: (src: any, dst: any, threshold1: number, threshold2: number) => void;
      findContours: (src: any, contours: any, hierarchy: any, mode: number, method: number) => void;
      arcLength: (curve: any, closed: boolean) => number;
      approxPolyDP: (curve: any, approxCurve: any, epsilon: number, closed: boolean) => void;
      contourArea: (contour: any) => number;
      minAreaRect: (points: any) => { size: { width: number; height: number } };
    };
  }
}

export {}; 