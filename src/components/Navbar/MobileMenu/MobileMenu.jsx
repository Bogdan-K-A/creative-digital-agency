import React from 'react';
import { MobileIcon, NavLink } from '../Navbar.styled';
import { LogoWrapper, StyledMobileMenu } from './MobileMenu.styled';
import { Flex } from '../../ui-component/Flex';

import CloseIcon from '../../../assets/navbar/mobile-close.svg';
import logoYellow from '../../../assets/navbar/logo-yellow.svg';
import { Logo } from '../../Logo/Logo';

export const MobileMenu = ({ isOpen, close }) => {
  return (
    <StyledMobileMenu isOpen={isOpen}>
      <MobileIcon onClick={close} margin="0 0 20px 0">
        <img src={CloseIcon} alt="close" />
      </MobileIcon>
      <LogoWrapper>
        <Logo
          logo={logoYellow}
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        />
      </LogoWrapper>
      <Flex direction="column" align="center" justify="center">
        <ul>
          <li>
            <NavLink
              mobile="mobile"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={close}
            >
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink
              mobile="mobile"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={close}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              mobile="mobile"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={close}
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              mobile="mobile"
              to="contactForm"
              spy={true}
              smooth={true}
              offset={-320}
              duration={500}
              onClick={close}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </Flex>
    </StyledMobileMenu>
  );
};
