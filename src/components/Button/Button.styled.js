import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledButton = styled(Link)`
  display: inline-block;
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  /* padding: 15px 30px; */

  background-color: ${p => p.theme.colors.prymary};
  border: 2px solid ${p => p.theme.colors.prymary};
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.extraBold};

  border-radius: ${({ modal }) => (modal ? '10px' : '0')};

  cursor: pointer;
  transition: 0.5s ease;

  :hover,
  :focus {
    background-color: ${p =>
      p.modal ? `${p.theme.colors.prymary}` : 'transparent'};
    transition: 0.5s ease;
  }
`;
