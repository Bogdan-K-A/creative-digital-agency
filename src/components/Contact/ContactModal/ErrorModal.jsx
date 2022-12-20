import React from 'react';
import { Button } from '../../Button/Button';
import { StyledModal } from './Modal.styled';

export const ErrorModal = ({ closeModal, status }) => {
  return (
    <StyledModal error={status === 'error'}>
      <h3>Oooops!!!</h3>
      <p>Something went wrong :{'('}</p>
      <Button padding="15px 23px" modal="modal" onClick={closeModal}>
        Ok
      </Button>
    </StyledModal>
  );
};
