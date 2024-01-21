// utils/getImages.js
const getImages = () => {
  try {
    const imageContext = require.context(
      "/public/images",
      false,
      /\.(jpg|JPG|jpe?g)$/
    );
    const imageFiles = imageContext.keys();

    // Extract file names and create image objects
    const images = imageFiles.map((file) => {
      const fileName = file.replace("./", "");
      return {
        src: `/images/${fileName}`,
        name: fileName, // Add the name property
      };
    });

    // Sort images based on the name property
    const sortedImages = images.sort((a, b) => a.name.localeCompare(b.name));

    return sortedImages;
  } catch (error) {
    console.error("Error reading images:", error);
    return [];
  }
};

export default getImages;
