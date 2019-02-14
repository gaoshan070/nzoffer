import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Screen from '../../components/Screen';
import { ROUTES } from '../../routes/routesConfig';
import { Box, Button, SPACE } from '../../styles';
import { useField } from '../../miscellaneous/hooks';
import { Input } from '../../components/Input';
import { feathersApp, regFromChatService } from '../../utils/feathers';

const LoginScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const [phone, onPhoneChange] = useField('');
  const [password, onPasswordChange] = useField('');

  return (
    <Screen>
      <Box
        direction="column"
        width={[1, '400px']}
        bg="white1"
        mx={SPACE.medium}
        mt={SPACE.large}
        px={SPACE.small}
        py={SPACE.small}
        height="fit-content"
      >
        <Box direction="column" gap={SPACE.xSmall}>
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
