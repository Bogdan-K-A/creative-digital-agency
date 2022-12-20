import styled from 'styled-components';

export const TitleBox = styled.div`
  width: 651px;

  @media screen and (max-width: 990px) {
    width: 100%;
    text-align: center;
  }
`;

export const PortfolioFilter = styled.ul`
  display: flex;
  font-size: ${p => p.theme.fontSizes[0]};

  @media screen and (max-width: 990px) {
    margin-bottom: 30px;
  }
`;

export const StyledFilterItem = styled.li`
  padding: 5px 15px;
  font-size: ${p => p.theme.fontSizes[0]};

  background-color: ${p =>
    p.background ? `${p.theme.colors.prymary}` : 'none'};

  cursor: pointer;
  transition: 0.5s ease;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.prymary};
    transition: 0.5s ease;
  }

  :not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 400px) {
    padding: 5px;
  }
`;

export const FilterWrapp = styled.div`
  position: relative;
  display: flex;

  cursor: pointer;

  p {
    font-size: ${p => p.theme.fontSizes[0]};
    margin-right: 12px;
  }
`;

export const FilteDropMenu = styled.ul`
  position: absolute;
  top: 20px;
  left: -12px;

  font-size: ${p => p.theme.fontSizes[0]};

  background-color: ${p => p.theme.colors.light};
  box-shadow: ${p => p.theme.shadow};

  text-align: center;
  border-radius: ${p => p.theme.radii[0]};

  z-index: 999;
  transition: 0.5s ease;

  > li {
    padding: 15px 40px;
    margin: 2px 0;

    @media screen and (max-width: 651px) {
      padding: 15px 60px;
    }
  }

  > li:hover {
    background-color: ${p => p.theme.colors.prymary};
    transition: 0.5s ease;
  }

  @media screen and (max-width: 651px) {
    left: -32px;
  }
`;

export const PortfolioHoverInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${p => p.theme.colors.muted};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: 0.5s ease;

  :hover,
  :focus {
    opacity: 1;
    transition: 0.5s ease;
  }

  > p {
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[0]};
  }

  > p:not(:last-child) {
    margin-bottom: 10px;

    font-size: ${p => p.theme.fontSizes[4]};
    font-weight: ${p => p.theme.fontWeights.extraBold};
  }
`;
