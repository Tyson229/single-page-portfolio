interface skillItemPropsType {
  skillName: string;
  years: number;
}

const SkillItem = ({ skillName, years }: skillItemPropsType) => {
  return (
    <div>
      <h2 className="text-4xl mb-2">{skillName}</h2>
      <p className="text-grey">{years} Years Experience</p>
    </div>
  );
};

export default SkillItem;