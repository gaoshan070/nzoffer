import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { ROUTES } from '../../../../routes/routesConfig';
import HeaderLine from './components/HeaderLine';
import ValidationInput from './components/ValidationInput/ValidationInput';
import PhoneNumberCheck from './components/PhoneNumberCheck';
import {
  Box,
  Button,
  SPACE,
} from '../../../../styles';
import { Input } from '../../../../components/Input';
import {
  feathersApp,
  regFromChatService,
} from '../../../../utils/feathers';
import { Passwords } from './components/Passwords';
import { StoreContext } from '../../../../store/store.context';

const LoginForm: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const store = useContext(StoreContext);

  const submit = () => {
    // regFromChatService.create().then(() => {
    //   history.replace(ROUTES.BASIC_INFO);
    // });

    history.replace(ROUTES.BASIC_INFO);
  };

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
          value={store.phone !== 0 ? store.phone : ''}
          validate={/^\d{11}$/}
          errorMessage="请输入正确的手机号"
          onChange={e => {
            // debugger;
            store.update(
              'phone',
              // @ts-ignore
              e.currentTarget.value,
            );
          }}
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

export default withRouter(observer(LoginForm));
