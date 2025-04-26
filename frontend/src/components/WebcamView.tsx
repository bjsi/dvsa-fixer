import { useEffect, useRef, useState } from 'react';

const WebcamView = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string>('');

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: false 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
        setError('');
      }
    } catch (err) {
      setError('Failed to access webcam. Please make sure you have granted permission.');
      console.error('Error accessing webcam:', err);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

  return (
    <div className="webcam-container">
      <div className="webcam-video">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{
            maxWidth: '100%',
            borderRadius: '8px',
            backgroundColor: '#000',
          }}
        />
      </div>
      <div className="webcam-controls" style={{ marginTop: '1rem' }}>
        <button
          onClick={isStreaming ? stopWebcam : startWebcam}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: isStreaming ? '#dc2626' : '#2563eb',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isStreaming ? 'Stop Camera' : 'Start Camera'}
        </button>
      </div>
      {error && (
        <div className="webcam-error" style={{ color: '#dc2626', marginTop: '0.5rem' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default WebcamView; 