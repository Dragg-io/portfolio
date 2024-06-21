import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper/modules';
import { PrismicDocument } from '@prismicio/client';

interface BrandBeltProps {
  brands: PrismicDocument<Record<string, any>, string, string>[] | undefined | any;
};

const BrandBelt = ({ brands }: BrandBeltProps) => {
  return <div className='w-full h-[132px] bg-g1 flex items-center'>
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={90}
      loop={true}
      autoplay={{ delay: 1, disableOnInteraction: false }}
      freeMode={true}
      speed={2000}
      modules={[FreeMode, Autoplay]}
    >
      {brands && brands.map((item: any) => (
        <SwiperSlide className='!h-[132px] !flex items-center max-w-[300px]'>
          <a
            key={item.data.name}
            href={item?.data?.url?.url}
            target="_blank"
            rel="noreferrer"
            className='select-none'
          >
            <img src={item.data.logo.url} alt={item.data.name} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>;
}

export default BrandBelt;