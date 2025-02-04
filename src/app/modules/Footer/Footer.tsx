import React from 'react';
import Title from '../../elements/Title/Title';
import { EnvelopeSimple, PaperPlaneTilt, PhoneIncoming } from '@phosphor-icons/react';


const Footer: React.FC = () => {
  return <>
    <div className='min-h-[596px] bg-b2 flex items-center justify-between px-[calc((100%-1530px)/2)] mt-[150px] tablet:flex-col tablet:px-10 tablet:py-10 tablet:items-start tablet:min-h-[auto] tablet:gap-20 tablet:mt-20'>
      <div>
        <Title>contato</Title>
        <p className='text-w2 text-4xl mt-8 max-w-[621px] w-[90] font-light'>
          Se você tem interesse ou quer<br /> tirar alguma dúvida sobre meu<br /> trabalho, me mande uma<br /> mensagem!
        </p>
      </div>
      <div className='w-[40%] tablet:w-full'>
        <ul>
          <li className='text-w2 text-2xl flex gap-[30px] items-center mb-5'>
            <PhoneIncoming size={27} />
            <p>+55 11 98141-9758</p>
          </li>
          <li className='text-w2 text-2xl flex gap-[30px] items-center mb-5 mobile:text-xl'>
            <EnvelopeSimple size={27} />
            <p>lucaspedrodeveloper@gmail.com</p>
          </li>
          <li className='text-w2 text-2xl flex gap-[30px] items-center mb-5'>
            <PaperPlaneTilt size={27} />
            <p>Jardim Paulistano, São Paulo</p>
          </li>
        </ul>
      </div>
    </div>
    <footer className='w-full h-[76px] bg-b1 flex items-center pl-[calc((100%-1530px)/2)]'>
      <p className='text-w1 text-sm font-bold tablet:px-10'>
        © 2024 Draggio. Todos os direitos reservados.
      </p>
    </footer>
  </>;
}

export default Footer;