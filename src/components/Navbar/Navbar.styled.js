import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  padding: ${({ scroll }) => (scroll >= 80 ? '29px 0' : '9px 0')};
  transition: 0.3s ease;
  z-index: 100;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileIcon = styled.div`
  display: none;
  padding: ${({ padding }) => (padding ? '20px' : '10px 15px')};
  margin: ${({ margin }) => margin || '0'};

  cursor: pointer;

  @media screen and (max-width: 720px) {
    display: block;
  }
`;

export const DesctopMenu = styled.nav`
  display: block;

  > ul {
    display: flex;

    > li:not(:last-child) {
      margin-right: 74px;
    }
    > li {
      .active {
        color: ${p => p.theme.colors.prymary};
        transition: 0.5s ease;
      }
    }
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: ${({ mobile }) => (mobile ? '0' : '20px 0')};
  cursor: pointer;

  :hover,
  :focus {
    color: ${p => p.theme.colors.prymary};
    transition: 0.5s ease;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.colors.text};

  opacity: 0.8;
  z-index: 500;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
