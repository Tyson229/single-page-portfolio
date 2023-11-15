import Button from "../layout/Button";

const ProfileDescription = () => {
  return (
    <article className="flex flex-col items-center gap-6 px-4 pb-16 text-center sm:z-10 sm:mt-40 sm:w-4/6 sm:items-start sm:gap-12 sm:p-0 sm:text-start md:w-[80%] md:mb-32">
      <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl">
        Nice to meet you! <br className="sm:hidden md:block" />
        I'm <span className="border-b-4 border-b-green ">Adam Keyes.</span>
      </h1>
      <p className="max-w-[340px] text-grey">
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <Button>
        <a href="#contact" className="">
          CONTACT ME
        </a>
      </Button>
    </article>
  );
};

export default ProfileDescription;
