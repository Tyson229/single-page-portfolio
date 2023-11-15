
import Button from '../layout/Button';

const ProjectHeading = () => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h1 className="text-5xl">Projects</h1>
      <Button>
        <a href="#contact" className="sm:text-sm">
          CONTACT ME
        </a>
      </Button>
    </div>
  );
}

export default ProjectHeading