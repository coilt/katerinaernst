// utils/imageImporter.js

const imageContext = require.context(
  "/public/images",
  false,
  /\.(JPG|jpg|png|jpe?g|svg)$/
);

const images = imageContext.keys().map(imageContext);

export default images;
