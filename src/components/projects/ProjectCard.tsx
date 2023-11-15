import useWindowSize from "../../hooks/useWindowSize";
import Button from "../layout/Button";
import ButtonContainer from "./ButtonContainer";
import { ProjectType } from "./ProjectList";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { images, title, tech, codeUrl, projectUrl } = project;
  const windowSize = useWindowSize();
  return (
    <div>
      <div className="group relative">
        <img
          src={windowSize < 600 ? images.large : images.small}
          alt="project image"
          className="z-0 group-hover:opacity-30"
        />
        <ButtonContainer
          className="absolute right-[40%] top-[40%] z-10 hidden flex-col items-center gap-6 md:group-hover:flex"
          projectUrl={projectUrl}
          codeUrl={codeUrl}
        />
      </div>
      <h2 className="mt-4 text-3xl font-bold uppercase sm:text-2xl">{title}</h2>
      <div className="mt-4 flex gap-4 text-xl uppercase text-grey sm:text-sm md:mb-8">
        {tech.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>

      <ButtonContainer
        className="mb-12 mt-6 flex gap-10 text-lg uppercase sm:text-sm md:hidden"
        projectUrl={projectUrl}
        codeUrl={codeUrl}
      />
    </div>
  );
};

export default ProjectCard;
