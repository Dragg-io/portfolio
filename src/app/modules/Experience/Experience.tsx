import { PrismicRichText } from "@prismicio/react";

interface ExperienceProps {
  data: any;
}

const Experience = ({ data }: ExperienceProps) => {
  const exp = data.data;
  return <div className="flex gap-11 mb-[45px] mobile:flex-col mobile:gap-5">
    <div>
      <span className="text-w1 text-lg text-nowrap monoFonting">{exp.period}</span>
    </div>
    <div>
      <h3 className="text-xl text-w1 font-bold">{exp.corp}</h3>
      <p className="text-w1 text-base font-bold">{exp.position}</p>
      <p className="text-w2 text-lg max-w-[688px]">
        <PrismicRichText field={exp.description} />
      </p>
      <div className="flex gap-2 mt-[9px] ">
        {exp.projects.map((project: any) => <a className="h-[26px] bg-g1 text-b1 text-sm font-bold flex items-center px-3 font-[Raleway]" href={project.url}>{project.name}</a>)}
      </div>
    </div>
  </div>;
}

export default Experience;