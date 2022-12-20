import React from 'react';

//COMPONENTS
import { ContactInfoBox } from './ContactInfoBox';

//STYLEDCOMPONENTS
import { Flex } from '../../ui-component/Flex';

//IMAGES
import icon01 from '../../../assets/contact/contact-info01.svg';
import icon02 from '../../../assets/contact/contact-info02.svg';
import icon03 from '../../../assets/contact/contact-info03.svg';

export const ContactInfo = () => {
  return (
    <Flex laptop tablet justify="space-evenly" margin="0 0 40px 0">
      <ContactInfoBox
        icon={icon01}
        textLine1="1211 Awesome Avenue,"
        textLine2="NY USD"
      />

      <ContactInfoBox
        icon={icon02}
        textLine1="+00 123 - 456 -78"
        textLine2="+00 987 - 654 -32"
      />

      <ContactInfoBox
        icon={icon03}
        textLine1="mint@mintmail.com"
        textLine2=""
      />
    </Flex>
  );
};
