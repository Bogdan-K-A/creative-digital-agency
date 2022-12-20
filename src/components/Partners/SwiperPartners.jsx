import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

//STYLELIBRARES
import 'swiper/css';
import 'swiper/css/free-mode';

//COMPONENTS
import { Container } from '../Container/Container';
import { partnersData } from './partnersData';
import { PartnerBox } from './PartnerBox';

export const SwiperPartners = () => {
  const [partners, setPartners] = useState(partnersData);

  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    modules: [FreeMode],
    className: 'mySwiper',
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Container>
      <Swiper {...params}>
        {partners.map(({ id, preview }) => (
          <SwiperSlide key={id}>
            <PartnerBox partner={preview} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
