import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Screen from '../../components/Screen';
import { ROUTES } from '../../routes/routesConfig';
import {
  Box,
  Input,
  Button,
} from '../../rebase/components';
import { useField } from '../../miscellaneous/hooks';

const LoginScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [phone, onPhoneChange] = useField('');
  const [password, onPasswordChange] = useField('');

  return (
    <Screen>
      <Box
        direction="column"
        width={[1, '450px']}
        maxWidth="300px"
        bg="white1"
        mx="medium"
        mt="large"
        px={['large', 'xlarge']}
        py="medium"
        height={260}
      >
        <Box
          direction="column"
          flexGrow={1}
          py="medium"
          justifyContent="around"
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
            <Button
              width={1 / 2}
              onClick={() => {
                history.replace(ROUTES.PORTAL);
              }}
            >
              登录
            </Button>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
};

export default LoginScreen;
