const importAll = (context) => context.keys().map(context);

// Import all images from the "images" folder
const imageContext = require.context(
  "/public/images",
  false,
  /\.(jpg|JPG|jpe?g|svg)$/
);
const images = importAll(imageContext).map((image) => ({
  src: image.default, // Ensure you're using image.default here
}));

export default images;
