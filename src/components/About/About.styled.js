import styled from 'styled-components';

export const ImgBox = styled.div`
  position: relative;
  margin-right: 30px;

  img {
    width: 100%;
    max-width: 370px;
    height: 100%;
  }

  @media screen and (max-width: 990px) {
    margin-bottom: 60px;
    margin-right: 0;
  }
`;

export const NameBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 70%;
  height: 60px;

  padding: 5px 20px;

  > p:not(:last-child) {
    margin-top: 5px;
    margin-bottom: 10px;

    font-weight: ${p => p.theme.fontWeights.extraBold};
  }

  > p:last-child {
    color: ${p => p.theme.colors.white};
  }

  background-color: ${p => p.theme.colors.prymary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 262px;
  height: 312px;
  padding: 50px;

  border: 4px solid ${p => p.theme.colors.light};

  > h4 {
    margin-bottom: 20px;

    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.extraBold};
  }

  > p {
    margin-bottom: 20px;

    @media screen and (max-width: 990px) {
      text-align: center;
    }
  }

  > p:last-child {
    cursor: pointer;
    :hover {
      color: ${p => p.theme.colors.prymary};
      transition: 0.5s ease;
    }
  }

  @media screen and (max-width: 990px) {
    align-items: center;
    padding: 25px;
  }
`;
