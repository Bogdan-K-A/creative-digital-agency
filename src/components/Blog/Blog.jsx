import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';

//COMPONENTS
import { Container } from '../Container/Container';
import { BlogBox } from './BlogBox';

//STYLEDCOMPONENTS
import { Section } from '../ui-component/Section';
import { Text } from '../ui-component/Text';
import { Title } from '../ui-component/Title';
import { TitleBox } from '../Portfolio/Portfolio.styled';

//DATA
import { storiesData } from './storiesData.js';

const params = {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  modules: [FreeMode],
  className: 'mySwiper',
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};

export const Blog = () => {
  const [stories, setStories] = useState(storiesData);

  return (
    <Section id="blog" padding="60px 0">
      <Container>
        <TitleBox>
          <Title margin="0 0 40px">OUR BLOG.</Title>
          <Text margin="0 0 60px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
          </Text>
        </TitleBox>

        <Swiper {...params}>
          {stories.map(story => (
            <SwiperSlide key={story.id}>
              <BlogBox {...story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};
