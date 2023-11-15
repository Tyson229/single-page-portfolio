import PatternContainer from "../layout/PatternContainer";
import Navbar from "../navbar/Navbar";

import ProfileDescription from "./ProfileDescription";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-lg px-4">
      <section className="relative flex flex-col items-center justify-center border-b border-b-grey sm:flex-row-reverse sm:justify-end sm:pb-12">
        <div className="absolute top-0 z-10 w-full md:pr-6">
          <Navbar />
        </div>
        <PatternContainer />
        <ProfileDescription />
      </section>
    </div>
  );
};

export default Hero;
