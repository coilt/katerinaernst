// VideoThumbnailComponent.jsx
import React, { useRef, useState } from "react";

const VideoThumbnailComponent = ({ posterImage, videoSource }) => {
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
    setIsVideoHovered(false);
    if (videoThumbnailRef.current) {
      videoThumbnailRef.current.pause();
      videoThumbnailRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="thumbnail-container"
      style={{
        width: "480px",
        height: "270px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={handleVideoThumbnailHover}
      onMouseLeave={handleVideoThumbnailLeave}
    >
      <video
        ref={videoThumbnailRef}
        className={`thumbnail-video ${isVideoHovered ? "active" : ""}`}
        poster={posterImage}
        preload="metadata"
        muted
        loop
        autoPlay={isVideoHovered}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: isVideoHovered ? "1" : "0",
          transition: "opacity 0.3s ease", // Adjusted the transition duration
        }}
      >
        {videoSource && <source src={videoSource} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      <img
        className={`img-responsive ${isVideoHovered ? "hidden" : ""}`}
        src={posterImage}
        alt="Video Thumbnail"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: isVideoHovered ? "0" : "1",
          transition: "opacity 0.3s ease", // Adjusted the transition duration
        }}
      />
    </div>
  );
};

export default VideoThumbnailComponent;
