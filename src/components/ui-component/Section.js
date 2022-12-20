import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: ${({ padding }) => padding || '0'};
  background-color: ${p => p.background || `${p.theme.colors.white}`};

  @media screen and (max-width: 1080px) {
    padding: ${p => {
      if (p.heroLaptop) return '140px 0 60px 0';
    }};
  }
`;

export const Section = props => {
  return <StyledSection {...props} />;
};
