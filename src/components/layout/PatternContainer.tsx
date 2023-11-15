import ImageProfile from "../hero/ImageProfile";
import PatternRing from "./PatternRing";

const PatternContainer = () => {
  return (
    <div className="relative mb-10 flex items-center justify-center w-full sm:absolute sm:z-0 sm:justify-end md:top-0 md:right-0">
      <PatternRing className="absolute -left-[50%] top-[38%] z-0 sm:-left-[45%] sm:top-[22.3%] md:-left-[20%] md:top-[20%]" />
      <img
        src="./assets/images/pattern-circle.svg"
        alt="pattern circle"
        className="absolute -right-20 bottom-0 z-0 sm:z-10 md:right-[27%] md:bottom-12"
      />
      <ImageProfile />
    </div>
  );
};

export default PatternContainer;
