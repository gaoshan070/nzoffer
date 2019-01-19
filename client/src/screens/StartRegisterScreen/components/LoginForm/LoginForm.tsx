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
  Input,
} from '../../../../rebase/components';

const LoginForm: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [mobilePhone, onChange] = useField('');

  return (
    <Box
      direction="column"
      width={[1, '450px']}
      maxWidth="350px"
      bg="white1"
      mx="small"
      mt="large"
      px={['medium', 'xlarge']}
      py={['large', 'xlarge']}
      height="25rem"
    >
      <HeaderLine />
      <Box
        direction="column"
        py="small"
        height="18rem"
        justifyContent="around"
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
