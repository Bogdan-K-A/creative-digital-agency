import styled from 'styled-components';

export const IconBox = styled.li`
  cursor: pointer;

  a {
    padding: 15px 35px 0 35px;

    @media screen and (max-width: 990px) {
      padding: 0;
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }

  :hover svg {
    fill: ${p => p.theme.colors.prymary};
    transition: 0.5s ease;
  }

  :not(:last-child) {
    @media screen and (max-width: 990px) {
      margin-bottom: 70px;
    }
  }
`;
