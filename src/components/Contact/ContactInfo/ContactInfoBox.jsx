import React from 'react';
import { Flex } from '../../ui-component/Flex';
import { Text } from '../../ui-component/Text';

export const ContactInfoBox = ({ icon, textLine1, textLine2 }) => {
  return (
    <Flex laptop direction="column" align="center">
      <div style={{ marginBottom: '15px' }}>
        <img src={icon} alt="address" />
      </div>
      <Flex laptop direction="column" align="center" margin="0 0 20px 0">
        <Text>{textLine1}</Text>
        <Text>{textLine2}</Text>
      </Flex>
    </Flex>
  );
};
