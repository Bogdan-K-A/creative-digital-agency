import styled from 'styled-components';

export const StyledBlogBox = styled.div`
  width: 100%;
  max-width: 370px;
  min-height: 460px;
  margin: 0 auto;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const BlogHoverInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${p => p.theme.colors.muted};

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: 0.5s ease;

  :hover {
    opacity: 1;
    transition: 0.5s ease;
  }

  > p {
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[5]};
    font-weight: ${p => p.theme.fontWeights.extraBold};
  }
`;

export const BlogContentWrapper = styled.div`
  padding: 35px;

  > p:first-child {
    font-weight: ${p => p.theme.fontWeights.extraBold};
  }

  > p:not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
