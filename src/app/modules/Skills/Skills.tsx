interface SkillsProps {
  data: any
}

const Skills = ({ data }: SkillsProps) => {
  return <h4 className="text-w2 text-lg pl-11 mb-4"><span className="text-w1 monoFonting">{`</`}</span> {data.name}</h4>;
}

export default Skills;