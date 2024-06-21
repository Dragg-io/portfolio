import React from 'react';
import Logo from '../../elements/Logo/Logo';
import Button from './../../elements/Button/Button';
import { ArrowUpRight } from '@phosphor-icons/react';

const Header: React.FC = () => {
  return <header className='w-full flex justify-center'>
    <div className='flex justify-between items-center py-6 max-w-[1530px] w-[90%] relative'>
      <Logo />
      <nav className='flex justify-center absolute w-full tablet:hidden'>
        <ul className='flex gap-9'>
          <li><a className='text-w1 hover:text-w2 text-2xl' href="/">Home</a></li>
          <li><a className='text-w1 hover:text-w2 text-2xl' href="/#publicacoes">Publicações</a></li>
          <li><a className='text-w1 hover:text-w2 text-2xl' href="/#about">Sobre mim</a></li>
          <li><a className='text-w1 hover:text-w2 text-2xl' href="/#curriculum">Currículo</a></li>
        </ul>
      </nav>
      <div className='z-10 mobile:hidden'>
        <Button type="default" weight='light'>Contato <ArrowUpRight size={24} /></Button>
      </div>
    </div>
  </header>;
}

export default Header;