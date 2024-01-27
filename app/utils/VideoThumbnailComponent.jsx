import React, { useRef, useState, useEffect } from "react";

const VideoThumbnailComponent = ({
  posterImage,
  videoSource,
  lgThumbnailProps,
  thumbnailWidth, // Custom width for both image and video
  thumbnailHeight, // Custom height for both image and video
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
    <div className="grid-cols-2 gap-4 content-start">
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
          style={{
            width: thumbnailWidth,
            height: thumbnailHeight,
          }}
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
            style={{
              width: thumbnailWidth,
              height: thumbnailHeight,
            }}
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
