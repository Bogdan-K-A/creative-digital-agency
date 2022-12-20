import styled from 'styled-components';

export const StyledMobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  height: 100vh;
  width: 50%;
  padding: 18px;
  background-color: ${p => p.theme.colors.text};

  transition: all 0.4s ease;
  overflow-y: auto;
  z-index: 1000;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    > li {
      color: ${p => p.theme.colors.white};
      font-size: ${p => p.theme.fontSizes[4]};

      cursor: pointer;
      .active {
        color: ${p => p.theme.colors.prymary};
        transition: 0.5s ease;
      }
    }

    > li:not(:last-child) {
      margin-bottom: 50px;
    }

    > li:hover {
      color: ${p => p.theme.colors.prymary};
    }
  }

  @media screen and (max-width: 720px) {
    width: 70%;
  }

  @media screen and (max-width: 520px) {
    width: 91%;
  }

  @media screen and (max-width: 320px) {
    width: 89%;
  }
`;

export const LogoWrapper = styled.div`
  width: 90px;
  margin-bottom: 90px;
  margin-left: auto;
  margin-right: auto;
`;
