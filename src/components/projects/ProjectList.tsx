import ProjectCard from "./ProjectCard";

export interface ProjectType {
  images: {
    small: string;
    large: string;
  };
  title: string;
  tech: string[];
  projectUrl: string;
  codeUrl: string;
}

const projects: ProjectType[] = [
  {
    images: {
      small: "./assets/images/thumbnail-project-1-small.webp",
      large: "./assets/images/thumbnail-project-1-large.webp",
    },
    title: "Design portfolio",
    tech: ["html", "css"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    images: {
      small: "./assets/images/thumbnail-project-2-small.webp",
      large: "./assets/images/thumbnail-project-2-large.webp",
    },
    title: "e-learning landing page",
    tech: ["html", "css"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    images: {
      small: "./assets/images/thumbnail-project-3-small.webp",
      large: "./assets/images/thumbnail-project-3-large.webp",
    },
    title: "todo web app",
    tech: ["html", "css", "javascript"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    images: {
      small: "./assets/images/thumbnail-project-4-small.webp",
      large: "./assets/images/thumbnail-project-4-large.webp",
    },
    title: "entertainment web app",
    tech: ["html", "css", "javascript"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    images: {
      small: "./assets/images/thumbnail-project-5-small.webp",
      large: "./assets/images/thumbnail-project-5-large.webp",
    },
    title: "memory game",
    tech: ["html", "css", "javascript"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    images: {
      small: "./assets/images/thumbnail-project-6-small.webp",
      large: "./assets/images/thumbnail-project-6-large.webp",
    },
    title: "art gallery showcase",
    tech: ["html", "css", "javascript"],
    projectUrl: "",
    codeUrl: "",
  },
];

const ProjectList = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-5">
      {projects.map((project, i) => {
        return <ProjectCard project={project} key={i} />;
      })}
    </div>
  );
};

export default ProjectList;
