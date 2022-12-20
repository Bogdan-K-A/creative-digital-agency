import { useEffect, useState } from 'react';

//UTILS
import { useToggle } from '../../hooks/useToggle';

//COMPONENTS
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';

//STYLEDCOMPONENTS
import {
  DesctopMenu,
  MobileIcon,
  StyledNavbar,
  NavLink,
  Backdrop,
  NavbarWrapper,
} from './Navbar.styled';

//IMAGES
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { isOpen, open, close } = useToggle();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledNavbar scroll={window.scrollY}>
      <Container>
        <NavbarWrapper>
          <Logo to="hero" spy={true} smooth={true} offset={0} duration={500} />

          <MobileIcon onClick={open}>
            <img src={MobileMenuIcon} alt="" />
          </MobileIcon>

          <DesctopMenu>
            <ul>
              <li>
                <NavLink
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  WORK
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  BLOG
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contactForm"
                  spy={true}
                  smooth={true}
                  offset={-370}
                  duration={500}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </DesctopMenu>
        </NavbarWrapper>
      </Container>
      <Backdrop onClick={close} isOpen={isOpen} />
      <MobileMenu isOpen={isOpen} close={close} />
    </StyledNavbar>
  );
};
