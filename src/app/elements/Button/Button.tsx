import React from 'react';

interface ButtonProps {
  type: 'default' | 'outlined';
  children: React.ReactNode;
  weight: 'light' | 'normal';
}

const Button = ({ children, type, weight }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
        ${type === 'outlined' ? 'border-2 border-g1 bg-transparent text-w1' : 'bg-g1 text-b1'}
        ${weight === 'normal' ? 'font-normal' : 'font-light'}
        rounded-none  px-7 py-2 text-2xl flex items-center gap-2 cursor-pointer
      `}
    >
      {children}
    </button>);
}

export default Button;