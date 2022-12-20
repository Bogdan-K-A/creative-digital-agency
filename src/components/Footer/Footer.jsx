import React from 'react';
import { Link } from 'react-scroll';

//COMPONENTS
import { Container } from '../Container/Container';

//STYLEDCOMPONENTS
import { Flex } from '../ui-component/Flex';
import { Text } from '../ui-component/Text';
import { Section } from '../ui-component/Section';
import { FooterText, FooterWrapper, LogoWrapper } from './Footer.styled';

//IMAGES
import Arrow from '../../assets/footer/arrow.svg';
import Logo from '../../assets/footer/logo.svg';

export const Footer = () => {
  return (
    <Section background={p => p.theme.colors.text} padding="55px 0">
      <Container>
        <FooterWrapper>
          <LogoWrapper>
            <img src={Logo} alt="logo" />
            <Text>© 2020 - Mint,All Right Reserved</Text>
          </LogoWrapper>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <Flex>
              <FooterText>BACK TO TOP</FooterText>
              <img src={Arrow} alt="arrow" />
            </Flex>
          </Link>
        </FooterWrapper>
      </Container>
    </Section>
  );
};
