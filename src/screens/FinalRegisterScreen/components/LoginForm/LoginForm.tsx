import React, { useState } from 'react';
import Box from '../../../../components/Box/Box';
import { Button } from '../../../../components/Button/Button';
import { css } from '../../../../styles/styledLib';
import { ROUTES } from '../../../../routes/routes';
import HeaderLine from './components/HeaderLine';
import Input from '../../../../components/Input';
import ValidationInput from './components/ValidationInput/ValidationInput';
import PhoneNumberCheck from './components/PhoneNumberCheck';
import { useField } from '../../../../miscellaneous/utils';

const LoginForm: React.FC = () => {
  const [mobilePhone, onChange] = useField('');

  return (
    <Box
      flexDirection="column"
      width={[1, '450px']}
      maxWidth="400px"
      bg="white1"
      mx={4}
      mt={7}
      px={[7, 9]}
      py={[6, 7]}
      height={360}
    >
      <HeaderLine />
      <Box
        flexDirection="column"
        py={3}
        flexGrow={1}
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
      <Box justifyContent="center">
        <Button text="注册" width={1 / 2} />
      </Box>
    </Box>
  );
};

export default LoginForm;
