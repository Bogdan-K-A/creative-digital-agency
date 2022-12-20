import React from 'react';

import { Flex } from '../../ui-component/Flex';

import { IconBox } from './ContactSocial.styled';
import { TfiFacebook, TfiTwitterAlt, TfiDribbble } from 'react-icons/tfi';

export const ContactSocial = () => {
  return (
    <>
      <ul>
        <Flex laptop tablet justify="center">
          <IconBox>
            <a href="https://www.facebook.com/" target="_blank">
              <TfiFacebook />
            </a>
          </IconBox>
          <IconBox>
            <a href="https://ads.twitter.com/" target="_blank">
              <TfiTwitterAlt />
            </a>
          </IconBox>
          <IconBox>
            <a href="https://dribbble.com/" target="_blank">
              <TfiDribbble />
            </a>
          </IconBox>
        </Flex>
      </ul>
    </>
  );
};
