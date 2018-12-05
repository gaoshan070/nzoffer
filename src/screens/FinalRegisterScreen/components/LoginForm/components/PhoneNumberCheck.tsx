import React, { useState } from 'react';
import { styled } from '../../../../../styles/styledLib';
import Input from './Input';
import Box from '../../../../../components/Box/Box';
import { useField } from '../../../../../miscellaneous/utils';

const PhoneNumberCheck: React.FC = () => {
  const [userInput, onChange] = useField('');

  return (
    <Box>
      <Input
        type="text"
        placeholder="请输入验证码"
        value={userInput}
        onChange={onChange}
      />
    </Box>
  );
};

export default PhoneNumberCheck;
