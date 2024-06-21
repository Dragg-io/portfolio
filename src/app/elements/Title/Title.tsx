import React from 'react';

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <div className='text-6xl font-bold flex'>
    {children}
    <b className='text-g1'>.</b>
  </div>;
}

export default Title;