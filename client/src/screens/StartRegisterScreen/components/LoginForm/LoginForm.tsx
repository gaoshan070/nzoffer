import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { ROUTES } from '../../../../routes/routesConfig';
import HeaderLine from './components/HeaderLine';
import ValidationInput from './components/ValidationInput/ValidationInput';
import PhoneNumberCheck from './components/PhoneNumberCheck';
import { useField } from '../../../../miscellaneous/hooks';
import {
  Box,
  Button,
} from '../../../../rebase/components';
import { Input } from '../../../../components/Input';

const LoginForm: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [mobilePhone, onChange] = useField('');

  return (
    <Box
      direction="column"
      width={[1, '450px']}
      bg="white1"
      mx="small"
      mt="large"
      px={['medium', 'large']}
      py="large"
      height="fit-content"
    >
      <HeaderLine />
      <Box direction="column" py="small" gap="large">
        <Input
          type="tel"
          placeholder="请输入手机号"
          value={mobilePhone}
          onChange={onChange}
        />
        <ValidationInput />
      </Box>
      <Box justifyContent="center">
        <Button
          width={1 / 2}
          onClick={() =>
            history.replace(ROUTES.FINISH_REGISTERING)
          }
        >
          注册
        </Button>
      </Box>
    </Box>
  );
};

export default withRouter(LoginForm);
