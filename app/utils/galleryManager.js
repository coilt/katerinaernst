let initialized = false;

export const initializeGallery = () => {
  if (!initialized) {
    // Initialize your gallery here
    window.lgData.videoGallery = window.lightGallery(
      document.getElementById("video-gallery"),
      {
        // Your gallery options
      }
    );
    initialized = true;
  }
};

export const destroyGallery = () => {
  if (initialized) {
    const galleryInstance = window.lgData.videoGallery;

    if (galleryInstance) {
      // Destroy the gallery if it exists
      galleryInstance.destroy();
    }

    initialized = false;
  }
};
