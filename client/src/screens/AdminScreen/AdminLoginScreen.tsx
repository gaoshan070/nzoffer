import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, SPACE } from '../../styles';
import { Input } from '../../components/Input';
import { LOGO } from '../../components/LOGO';
import { RouteComponentProps } from 'react-router-dom';
import { ROUTES } from '../../routes/routesConfig';

export const AdminLoginScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
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
          <Input placeholder="请输入  用户名" />
          <Input placeholder="请输入  密码" />
          <Button
            onClick={() => {
              history.replace(ROUTES.ADMIN_UNIVERSITIES);
            }}
          >
            登录
          </Button>
        </Box>
      </Box>
    );
  },
);
