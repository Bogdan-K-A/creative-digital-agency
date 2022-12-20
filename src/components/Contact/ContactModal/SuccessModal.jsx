import React from 'react';

import { Button } from '../../Button/Button';

import { StyledModal, MessageWrapper } from './Modal.styled';

export const SuccessModal = ({ closeModal }) => {
  return (
    <StyledModal>
      <h3>Success!</h3>
      <MessageWrapper>
        <p>Thank you for your email.</p>
        <p>We will respond as soon as possible.</p>
      </MessageWrapper>
      <Button padding="15px 23px" modal="modal" onClick={closeModal}>
        Ok
      </Button>
    </StyledModal>
  );
};
