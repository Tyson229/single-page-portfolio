import { useEffect, useState } from "react";

const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWindowSize(window.innerWidth));

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth),
      );
    };
  }, [windowSize]);

  return windowSize;
}

export default useWindowSize;