// utils/imageImporter.js

const imageContext = require.context(
  "/public/images",
  false,
  /\.(jpg|png|jpe?g|svg)$/
);

const images = imageContext.keys().map(imageContext);

export default images;
