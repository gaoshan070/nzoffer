import React, { useState } from 'react';
import Box from '../../../../components/Box/Box';
import { css } from '../../../../styles/styledLib';
import { ROUTES } from '../../../../routes/routes';
import HeaderLine from './components/HeaderLine';
import Input from './components/Input';
import ValidationInput from './components/ValidationInput/ValidationInput';
import PhoneNumberCheck from './components/PhoneNumberCheck';
import { useField } from '../../../../miscellaneous/utils';

const LoginForm: React.FC = () => {
  const [mobilePhone, onChange] = useField('');

  return (
    <Box
      flexDirection="column"
      width={[1, '500px']}
      bg="white1"
      mx={4}
      mt={5}
      px={[6, 7]}
      py={[7, 8]}
      height={400}
    >
      <HeaderLine />
      <Box
        flexDirection="column"
        py={5}
        css={css`
          flex-grow: 1;
        `}
        justifyContent="space-around"
      >
        <Input
          type="tel"
          placeholder="请输入手机号"
          value={mobilePhone}
          onChange={onChange}
        />
        <ValidationInput />
        <PhoneNumberCheck />
      </Box>
    </Box>
  );
};

export default LoginForm;
