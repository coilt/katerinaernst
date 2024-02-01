const MaskComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <mask id="brand-mask">
      {/* Define the mask shape, you can customize this as needed */}
      <rect width="100%" height="100%" fill="white" />
      <circle cx="50" cy="50" r="30" fill="black" />
    </mask>

    {/* This is just an example shape, you can customize it */}
    <rect width="100%" height="100%" fill="black" mask="url(#brand-mask)" />
  </svg>
);

export default MaskComponent;
