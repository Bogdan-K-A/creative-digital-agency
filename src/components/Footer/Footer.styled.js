import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  color: ${p => p.theme.colors.white};

  img {
    margin-right: 30px;
    @media screen and (max-width: 460px) {
      margin: 0 0 10px 0;
    }
  }

  p {
    @media screen and (max-width: 460px) {
      width: 101px;
    }
  }

  @media screen and (max-width: 460px) {
    flex-direction: column;
    margin: 0 0 40px 0;
  }
`;

export const FooterText = styled.p`
  margin-right: 10px;

  font-size: ${p => p.theme.fontSizes[0]};

  color: ${p => p.theme.colors.white};
  cursor: pointer;
`;
