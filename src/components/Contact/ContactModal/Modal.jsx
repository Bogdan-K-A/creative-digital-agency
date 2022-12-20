import React from 'react';
import { createPortal } from 'react-dom';

//COMPONENTS
import { ErrorModal } from './ErrorModal';
import { ModalBackdrop } from './ModalBackdrop';
import { SuccessModal } from './SuccessModal';

const modalRoot = document.querySelector('#root-modal');

export const Modal = ({ status, closeModal }) => {
  return createPortal(
    <>
      {status === 'success' && (
        <ModalBackdrop>
          <SuccessModal closeModal={closeModal} />
        </ModalBackdrop>
      )}
      {status === 'error' && (
        <ModalBackdrop>
          <ErrorModal status={status} closeModal={closeModal} />
        </ModalBackdrop>
      )}
    </>,
    modalRoot,
  );
};
