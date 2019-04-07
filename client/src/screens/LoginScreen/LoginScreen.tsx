import React from 'react';
import { RouteComponentProps } from 'react-router';
import Screen from '../../components/Screen';
import { ROUTES } from '../../routes/routesConfig';
import { Box, Button, SPACE } from '../../styles';
import { useField } from '../../miscellaneous/hooks';
import { Input } from '../../components/Input';
import { feathersApp, regFromChatService } from '../../utils/feathers';
import Alert from 'react-s-alert';
import { isPhoneValid } from '../../shared/phoneCheck';
import { StartRegScreen } from '../StartRegisterScreen/components/StartRegScreen';

const LoginScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const [phone, onPhoneChange] = useField('');
  const [password, onPasswordChange] = useField('');

  return (
    <StartRegScreen>
      <Box height="60vh" width={1} alignItems="center" justifyContent="center">
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
              validate={isPhoneValid}
              errorMessage="请填写正确的手机号哦，同学 🤓"
              value={phone}
              onChange={onPhoneChange}
            />
            <Input
              type="password"
              placeholder="请输入密码"
              validate={v => v !== ''}
              errorMessage="密码填不对，全部都白费"
              value={password}
              onChange={onPasswordChange}
            />
            <Box justifyContent="center">
              <Button
                width={1 / 2}
                minHeight="36px"
                maxHeight="36px"
                px={SPACE.xxxSmall}
                onClick={() => {
                  return feathersApp
                    .authenticate({
                      strategy: 'local',
                      phone,
                      password,
                    })
                    .then(() => {
                      // Logged in
                      // TODO: It should go to PORTAL if ready
                      history.replace(ROUTES.BASIC_INFO);
                    })
                    .catch((e: { code: number; message: string }) => {
                      Alert.error('手机号或密码错误, 不要慌, 我们慢慢来 😀');
                    });
                }}
              >
                登 录
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </StartRegScreen>
  );
};

export default LoginScreen;
