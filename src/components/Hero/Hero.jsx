import React from 'react';
// import { Link } from 'react-scroll';

//COMPONENTS
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';

//STYLEDCOMPONENTS
import { Section } from '../ui-component/Section';
import { Flex } from '../ui-component/Flex';
import { HeroImage, HeroInfo, BtnWrapper } from './Hero.styled';

//IMAGES
import heroImage from '../../assets/hero/hero-image.png';

export const Hero = () => {
  return (
    <Section hero="heroLaptop" padding="240px 0 60px" id="hero">
      <Container>
        <Flex laptop tablet>
          <HeroInfo>
            <h1>
              Hello!!! <br /> We Are Creative Digital Agency.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <BtnWrapper>
              <Button
                to="contactForm"
                spy={true}
                smooth={true}
                offset={-370}
                duration={500}
                padding="15px 30px"
              >
                SEND MESSAGE
              </Button>
            </BtnWrapper>
          </HeroInfo>
          <HeroImage>
            <img src={heroImage} alt="" />
          </HeroImage>
        </Flex>
      </Container>
    </Section>
  );
};
