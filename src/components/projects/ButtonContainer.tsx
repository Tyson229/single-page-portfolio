import Button from "../layout/Button";

const ButtonContainer = ({
  className,
  projectUrl,
  codeUrl,
}: {
  className: string;
  projectUrl: string;
  codeUrl: string;
}) => {
  return (
    <div className={className}>
      <Button>
        <a href={projectUrl}>View project</a>
      </Button>
      <Button>
        <a href={codeUrl}>View code</a>
      </Button>
    </div>
  );
};

export default ButtonContainer;
