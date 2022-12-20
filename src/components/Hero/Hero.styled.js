import styled from 'styled-components';

export const HeroInfo = styled.div`
  padding-top: 60px;
  width: 593px;

  @media screen and (max-width: 990px) {
    padding-top: 0px;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: ${p => p.theme.fontSizes[7]};
    line-height: ${p => p.theme.lineHeights.lh13};
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 50px;

    font-size: ${p => p.theme.fontSizes[0]};
    line-height: ${p => p.theme.lineHeights.lh23};
  }
`;

export const HeroImage = styled.div`
  max-width: 570px;

  margin-left: auto;
  @media screen and (max-width: 990px) {
    margin-left: 0;
  }
`;

export const BtnWrapper = styled.div`
  @media screen and (max-width: 990px) {
    margin-bottom: 40px;
  }
`;
