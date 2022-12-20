import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};

  @media screen and (max-width: ${'651px' && '990px'}) {
    flex-direction: ${({ laptop }) => (laptop ? 'column' : 'row')};
    align-items: ${({ laptop }) => (laptop ? 'center' : 'stretch')};
  }
`;

export const Flex = props => {
  return <StyledFlex {...props} />;
};
