// utils/getImages.js
const getImages = () => {
  try {
    const imageContext = require.context(
      "/public/images",
      false,
      /\.(png|jpe?g|gif|svg)$/
    );
    const imageFiles = imageContext.keys();

    const images = imageFiles.map((file) => ({
      src: `/images/${file.replace("./", "")}`,
    }));

    return images;
  } catch (error) {
    console.error("Error reading images:", error);
    return [];
  }
};

export default getImages;
