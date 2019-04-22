import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, SPACE } from '../../styles';
import { Input } from '../../components/Input';
import { LOGO } from '../../components/LOGO';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../routes/routesConfig';
import { useField } from '../../miscellaneous/hooks';
import Alert from 'react-s-alert';
import { feathersApp } from '../../utils/feathers';

const AdminLoginScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const [phone, phoneOnChange] = useField('');
    const [password, passwordOnChange] = useField('');

    return (
      <Box
        display="flex"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        css={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box direction="column" gap={SPACE.xSmall}>
          <LOGO height="3rem" />
          <Input
            placeholder="请输入  用户名"
            value={phone}
            onChange={phoneOnChange}
          />
          <Input
            placeholder="请输入  密码"
            value={password}
            onChange={passwordOnChange}
          />
          <Button
            onClick={() => {
              return feathersApp
                .authenticate({
                  strategy: 'local',
                  phone,
                  password,
                })
                .then(() => {
                  // Logged in
                  history.replace(ROUTES.ADMIN_NZ_STUDY_AREA);
                })
                .catch((e: { code: number; message: string }) => {
                  Alert.error('手机号或密码错误, 不要慌, 我们慢慢来.. 😀');
                });
            }}
          >
            登录
          </Button>
        </Box>
      </Box>
    );
  },
);

export default AdminLoginScreen;
