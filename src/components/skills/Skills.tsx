import PatternRing from "../layout/PatternRing";
import SkillItem from "./SkillItem";
const skillList = [
  { skillName: "HTML", years: 4 },
  { skillName: "CSS", years: 4 },
  { skillName: "JavaScript", years: 4 },
  { skillName: "Accessibility", years: 4 },
  { skillName: "React", years: 3 },
  { skillName: "Sass", years: 3 },
];

const Skills = () => {
  return (
    <div className="relative mb-16 w-full max-w-screen-lg px-4 md:mb-28">
      <section className="flex flex-col items-center gap-10 py-8 text-center max-sm:border-b sm:grid sm:grid-cols-2 md:grid-cols-3 sm:items-start sm:text-start">
        {skillList.map(({ skillName, years }, i) => (
          <SkillItem skillName={skillName} years={years} key={i} />
        ))}
      </section>
      
      <PatternRing className="absolute -bottom-14 -right-[60%] z-0 sm:-right-[40%] md:-right-[30%]"/>
    </div>
  );
};

export default Skills;
