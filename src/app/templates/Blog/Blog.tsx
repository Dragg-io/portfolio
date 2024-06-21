import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Blog: React.FC = () => {
  const uid = useParams().slug;
  const [post] = usePrismicDocumentByUID('posts', uid as string);
  return <main className='min-h-screen max-w-[1530px] w-[95%] m-[auto]'>
    <div className='w-full h-[500px]'>
      <img src={post?.data.banner.url} alt="" className='w-full h-full object-cover object-top' />
    </div>
    <h1 className='mt-[90px]'>{post?.data.title}</h1>
    <div className='mt-[30px] leading-7'>
      <PrismicRichText field={post?.data.content} />
    </div>
  </main>;
}

export default Blog;