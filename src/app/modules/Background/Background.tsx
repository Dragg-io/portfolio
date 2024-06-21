import { PrismicRichText } from "@prismicio/react";

interface BackgroundProps {
  data: any;
};

const Background = ({ data }: BackgroundProps) => {
  const bg = data.data;
  return <div className="pl-11 max-w-[338px] mp-[25]">
    <p className="text-w1 text-lg monoFonting">{bg.period}</p>
    <h3 className="text-w1 text-xl font-bold ">{bg.name}</h3>
    <p className="text-w2 text-base font-light">
      <PrismicRichText field={bg.description} />
    </p>
  </div>;
}

export default Background;