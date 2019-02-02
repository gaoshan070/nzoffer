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
import { feathersApp } from '../../../../utils/feathers';
import { Passwords } from './components/Passwords';

const LoginForm: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [mobilePhone, onChange] = useField('');

  function submit() {
    // return feathersApp
    //   .authenticate({
    //     strategy: 'local',
    //     email: 'my@email.com',
    //     password: 'my-password',
    //   })
    //   .then((data: unknown) => {
    //     // show application page
    //     console.log(data);
    //   })
    //   .catch((err: unknown) => {
    //     // show login page
    //     console.log(err);
    //   });
    history.replace(ROUTES.BASIC_INFO);
  }

  return (
    <Box
      direction="column"
      width={[0.9, '550px']}
      bg="white1"
      mx={SPACE.xSmall}
      mt={SPACE.small}
      px={[SPACE.small, SPACE.medium]}
      py={SPACE.small}
    >
      <HeaderLine />
      <Box
        direction="column"
        py={SPACE.small}
        gap={SPACE.xSmall}
      >
        <Input
          type="text"
          placeholder="请输入手机号"
          value={mobilePhone}
          onChange={onChange}
          borderRadius="4px 0 0 4px"
        />
        <PhoneNumberCheck />
        <ValidationInput />
      </Box>
      <Passwords />
      <Box justifyContent="center" mt={SPACE.small}>
        <Button width={1 / 2} onClick={submit}>
          注册
        </Button>
      </Box>
    </Box>
  );
};

export default withRouter(LoginForm);
