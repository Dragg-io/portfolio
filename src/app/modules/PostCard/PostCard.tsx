import { PrismicRichText } from "@prismicio/react";
import moment from "moment";

const PostCard = ({ data }: any) => {
  const post = data.data;
  return <a href={`/blog/${data.uid}`}>
    <div className="w-[360px] bg-b2">
      <div className="w-full h-[319px]">
        <img className="w-full h-full object-cover" src={post.banner.url} alt={post.banner.alt} />
      </div>
      <div className="h-[212px] p-6 relative">
        <h3 className="font-bold text-4xl text-w1 font-[Raleway]">
          {post.title}
        </h3>
        <span className="w-[110px] h-[45px] bg-g1 absolute top-0 right-0 text-b1 text-2xl font-black flex items-center justify-center monoFonting">
          {moment(data.last_publication_date).format('DD/MM')}
        </span>
        <p className="mt-[12px] text-[16px] text-w2 font-light font-[Raleway]">
          <PrismicRichText field={post.description} />
        </p>
      </div>
    </div>
  </a>;
}

export default PostCard;