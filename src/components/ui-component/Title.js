import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};

  font-weight: ${p => p.theme.fontWeights.extraBold};
  font-size: ${p => p.theme.fontSizes[7]};

  @media screen and (max-width: 400px) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const Title = props => {
  return <StyledTitle {...props} />;
};
