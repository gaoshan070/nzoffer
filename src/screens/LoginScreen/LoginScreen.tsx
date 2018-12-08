import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { css } from 'styled-components';
import Box from '../../components/Box/Box';
import Input, {
  useField,
} from '../../components/Input';
import { Button } from '../../components/Button/Button';

const LoginScreen: React.FC<
  RouteComponentProps
> = () => {
  const [phone, onPhoneChange] = useField('');
  const [password, onPasswordChange] = useField('');

  return (
    <Box
      flexDirection="column"
      width={[1, '450px']}
      maxWidth="300px"
      bg="white1"
      mx={4}
      mt={7}
      px={[7, 8]}
      py={[5, 5]}
      height={260}
    >
      <Box
        flexDirection="column"
        flexGrow={1}
        py={5}
        justifyContent="space-around"
      >
        <Input
          type="tel"
          placeholder="请输入手机号"
          value={phone}
          onChange={onPhoneChange}
        />
        <Input
          type="tel"
          placeholder="请输入密码"
          value={password}
          onChange={onPasswordChange}
        />
        <Box justifyContent="center">
          <Button text="登录" width={1 / 2} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
