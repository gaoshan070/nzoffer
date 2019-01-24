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
  SPACE,
} from '../../../../styles';
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
      mx={SPACE.small}
      mt={SPACE.large}
      px={[SPACE.medium, SPACE.large]}
      py={SPACE.large}
      height="fit-content"
    >
      <HeaderLine />
      <Box
        direction="column"
        py={SPACE.small}
        gap={SPACE.large}
      >
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
            history.replace(ROUTES.BASIC_INFO)
          }
        >
          注册
        </Button>
      </Box>
    </Box>
  );
};

export default withRouter(LoginForm);
