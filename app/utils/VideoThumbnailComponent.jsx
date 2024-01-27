import React, { useRef, useState, useEffect } from "react";

const VideoThumbnailComponent = ({
  posterImage,
  videoSource,
  lgThumbnailProps = {}, // Provide a default value
}) => {
  const videoThumbnailRef = useRef(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const handleVideoThumbnailHover = () => {
    setIsVideoHovered(true);
    if (videoThumbnailRef.current) {
      videoThumbnailRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handleVideoThumbnailLeave = () => {
    if (videoThumbnailRef.current) {
      videoThumbnailRef.current.pause();
      videoThumbnailRef.current.currentTime = 0;
      setIsVideoHovered(false);
    }
  };

  useEffect(() => {
    return () => {
      if (window.lgData && window.lgData.hasOwnProperty("videoGallery")) {
        window.lgData.videoGallery.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div
        className="thumbnail-container my-0"
        onMouseEnter={handleVideoThumbnailHover}
        onMouseLeave={handleVideoThumbnailLeave}
      >
        <img
          className={`img-responsive ${
            isVideoHovered ? "hidden" : "opacity-100"
          }`}
          src={posterImage}
          alt="Video Thumbnail"
          style={{}}
        />
        {isVideoHovered && (
          <video
            ref={videoThumbnailRef}
            className="thumbnail-video active"
            poster={posterImage}
            preload="metadata"
            muted
            loop
            autoPlay
            style={{}}
          >
            {videoSource && <source src={videoSource} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
        )}
        {lgThumbnailProps && <div {...lgThumbnailProps} />}
      </div>
    </div>
  );
};

export default VideoThumbnailComponent;
