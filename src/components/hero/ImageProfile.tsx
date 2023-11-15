import useWindowSize from "../../hooks/useWindowSize";

const ImageProfile = () => {
  const windowSize = useWindowSize();

  if (windowSize < 600)
    return (
      <img
        src="./assets/images/image-profile-mobile.webp"
        alt="Profile picture"
        className="relative w-1/2 max-w-xs"
      />
    );
  if (windowSize < 900)
    return (
      <img
        src="./assets/images/image-profile-tablet.webp"
        alt="Profile picture"
        className="max-w-xs translate-x-5"
      />
    );
  return (
    <img
      src="./assets/images/image-profile-desktop.webp"
      alt="Profile picture"
      className="max-w-sm"

    />
  );
};

export default ImageProfile;
