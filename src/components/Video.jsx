import React, { useEffect, useRef } from 'react';
import vid1 from '../assets/animated.mp4';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
        const playOnInteraction = () => {
          videoRef.current?.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      });
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden absolute top-0 left-0">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        src={vid1}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;