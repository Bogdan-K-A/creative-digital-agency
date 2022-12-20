import React from 'react';
import styled from 'styled-components';

export const PartnerBox = ({ partner }) => {
  return (
    <StyledPartnerBox>
      <img src={partner} alt="partner" />
    </StyledPartnerBox>
  );
};

const StyledPartnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 170px;
  height: 130px;
  margin: 0 auto;
`;
