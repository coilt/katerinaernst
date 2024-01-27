// VideoGalleryComponent.jsx

import React, { useEffect, useRef } from "react";
import lightGallery from "lightgallery";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

const VideoGalleryComponent = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Initialize LightGallery when the component mounts
    const galleryInstance = lightGallery(galleryRef.current, {
      plugins: [lgVideo],
    });

    // Clean up when the component unmounts
    return () => {
      // Destroy the LightGallery instance to prevent memory leaks
      if (galleryInstance) {
        galleryInstance.destroy();
      }
    };
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <div ref={galleryRef}>
      {/* Your video gallery content goes here */}
      <a
        data-lg-size="1280-720"
        data-src="//vimeo.com/180157095?muted=false"
        data-poster="https://redream.in/img/thumbs/thumb-nightfall-wraith.webp"
        data-sub-html="<h4>NIGHTFALL</h4>"
      >
        {/* Your VideoThumbnailComponent goes here */}
      </a>
      <a
        data-lg-size="1280-720"
        data-src="//vimeo.com/180157095?muted=false"
        data-poster="https://redream.in/img/thumbs/thumb-nightfall-wraith.webp"
        data-sub-html="<h4>NIGHTFALL</h4>"
      >
        {/* Your VideoThumbnailComponent goes here */}
      </a>
      {/* Add more videos as needed */}
    </div>
  );
};

export default VideoGalleryComponent;
