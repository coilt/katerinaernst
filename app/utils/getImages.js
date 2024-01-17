// utils/getImages.js
const getImages = () => {
  try {
    // Use require.context to dynamically import images from the 'public/images' folder
    const imageContext = require.context(
      "/public/images",
      false,
      /\.(png|jpe?g|gif|svg)$/
    );

    // Get the list of image file paths
    const imageFiles = imageContext.keys();

    // Create an array of image objects with the src property
    const images = imageFiles.map((file) => ({
      src: `/images/${file.replace("./", "")}`, // Adjust as needed
    }));

    return images;
  } catch (error) {
    console.error("Error reading images:", error);
    return [];
  }
};

export default getImages;
