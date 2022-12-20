import React from 'react';
import { Overlay } from './Modal.styled';

export const ModalBackdrop = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};
