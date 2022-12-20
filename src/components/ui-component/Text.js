import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};

  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.lh23};

  @media screen and (max-width: 990px) {
    width: 100%;
    text-align: ${({ laptop }) => laptop || 'center'};
  }
`;

export const Text = props => {
  return <StyledText {...props} />;
};
