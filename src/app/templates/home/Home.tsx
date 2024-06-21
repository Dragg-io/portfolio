import React from 'react';
import Button from '../../elements/Button/Button';
import { ArrowUpRight } from '@phosphor-icons/react';
import BrandBelt from '../../modules/BrandBelt/BrandBelt';
import Title from '../../elements/Title/Title';
import PostCard from '../../modules/PostCard/PostCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import List from '../../modules/List/List';
import Experience from '../../modules/Experience/Experience';
import Background from '../../modules/Background/Background';
import Skills from '../../modules/Skills/Skills';
import { useAllPrismicDocumentsByType, useFirstPrismicDocument, useSinglePrismicDocument } from '@prismicio/react';

const Home: React.FC = () => {

  const [skillslist] = useSinglePrismicDocument('skillslist');
  const [brands] = useAllPrismicDocumentsByType('brands');
  const [posts] = useAllPrismicDocumentsByType('posts');
  const [background] = useAllPrismicDocumentsByType('background');
  const [experience] = useAllPrismicDocumentsByType('experience');

  console.log(experience, background);

  return <main>
    <section className='h-[calc(100vh-119px)] w-full flex flex-col justify-center items-center'>
      <h1 className='text-w1 text-6xl leading-tight text-center tablet:text-4xl tablet:w-[90%]'>
        Desenvolvedor Full Stack<br />
        especializado em Front End
      </h1>
      <p className='text-w1 text-7xl text-center font-extrabold leading-tight highlightText mt-5 tablet:text-5xl tablet:max-w-[800px] tablet:leading-snug'>Se você deseja discutir um <b>projeto</b> ou<br /> apenas <b>trocar ideias</b>, sinta-se à <br />vontade para entrar em contato<b>.</b></p>
      <p className='mt-5 text-center font-light text-3xl text-w2 tablet:text-2xl'>Há sete anos transformando ideias em experiências digitais excepcionais</p>
      <div className='flex justify-center mt-16'>
        <Button type="outlined" weight='light'>Contato <ArrowUpRight size={24} /></Button>
      </div>
    </section>
    <BrandBelt brands={brands} />
    <section className='posts mx-auto mt-[90px] max-w-[1530px] w-[95%]' id='publicacoes'>
      <Title><h2>publicacões</h2></Title>
      <div className='mt-[60px]'>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {posts && posts?.map((post) => (
            <SwiperSlide key={post.uid}>
              <PostCard
                data={post}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <section className='mx-auto mt-[150px] max-w-[1530px] w-[90%] tablet:mt-20' id='about'>
      <Title>sobre mim</Title>
      <div>
        <div className='max-w-[750px] mt-[30px]'>
          <p className='text-2xl text-w2'>
            Meu nome é <b>Lucas Pedro</b> e tenho 25 anos. Sou um profissional com formação em desenvolvimento de sistemas e tenho especialização em tecnologias web, principalmente em JavaScript.
          </p>
          <p className='text-2xl text-w2 mt-[20px]'>
            Com quase sete anos de experiência na área, tenho uma sólida formação em desenvolvimento full stack, com um foco especial em front end. Já trabalhei em projetos para empresas de renome como <b>Lacta</b>, <b>Bauducco</b>, <b>Brastemp</b> e <b>Swarovski</b>, além de muitas outras.
          </p>
        </div>
      </div>
    </section>
    <p className='text-center mt-[120px] text-4xl text-w1 max-w-[1530px] mx-[auto] tablet:text-left tablet:w-[90%] tablet:mt-20'>
      Explore minha trajetória profissional, habilidades técnicas e certificações. <br />
      Para uma versão completa do meu currículo, entre em contato comigo.
    </p>
    <section className='w-[90%] mx-auto max-w-[1530px] mt-[120px] tablet:mt-20' id='curriculum'>
      <Title>currículo</Title>
      <div className='w-full flex gap-[160px] tablet:flex-col tablet:gap-[10px]'>
        <div>
          <List ItemComponnet={Experience} data={experience} title="EXPERIÊNCIA" />
        </div>
        <div className='mobile:!flex-col mobile:!w-full tablet:flex-row-reverse tablet:flex tablet:w-[fit-content]'>
          <div className='mobile:!w-full tablet:w-[50%]'>
            <List ItemComponnet={Background} data={background} title="FORMAÇÃO" />
          </div>
          <div className='mobile:!w-full tablet:w-[50%]'>
            <List ItemComponnet={Skills} data={skillslist?.data?.skills} title="TECNOLOGIAS" />
          </div>
        </div>
      </div>
    </section>
  </main>;
}

export default Home;