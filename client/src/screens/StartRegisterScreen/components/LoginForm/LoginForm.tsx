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
  Paragraph,
  SPACE,
  COLORS,
} from '../../../../styles';
import { Input } from '../../../../components/Input';
import LinkButton from '../../../../components/LinkButton';
import {
  feathersApp,
  regFromChatService,
} from '../../../../utils/feathers';
import { Passwords } from './components/Passwords';
import { StoreContext } from '../../../../store/store.context';
import Alert from 'react-s-alert';
import { ProgressBar } from '../ProgressBar';

const LoginForm: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const store = useContext(StoreContext).chatStore;

  const submit = async () => {
    if (!store.isFormReady()) {
      Alert.info('还有几项没填哦，加油😀');
      return;
    }

    try {
      const data = store.collectRegFromChatData();
      await regFromChatService.create(data);

      await feathersApp.authenticate({
        strategy: 'local',
        phone: data.phone,
        password: data.password,
      });

      history.replace(ROUTES.BASIC_INFO);
    } catch (err) {
      Alert.error(err.message);
    }
  };

  return (
    <Box
      width={[0.9, '420px']}
      direction="column"
      gap={SPACE.xxxxSmall}
      alignItems="center"
    >
      <ProgressBar progress={0.2} />
      <Box
        direction="column"
        width={1}
        bg="white1"
        mx={SPACE.xSmall}
        mt={SPACE.xxSmall}
        px={[SPACE.small, SPACE.small]}
        py={SPACE.small}
      >
        <HeaderLine />
        <Box
          direction="column"
          py={SPACE.small}
          gap={SPACE.xxSmall}
        >
          <Input
            type="text"
            placeholder="请输入手机号"
            value={
              store.phone !== 0 ? store.phone : ''
            }
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
          <Passwords />
        </Box>
        <Box justifyContent="center">
          <Button width={1 / 2} onClick={submit}>
            注册
          </Button>
        </Box>
      </Box>
      <Paragraph px={[SPACE.small, SPACE.large]}>
        注册代表你已同意
        <LinkButton
          bg={COLORS.background}
          color={COLORS.lightBlue}
          px={2}
        >
          Offer111用户协议
        </LinkButton>
      </Paragraph>
    </Box>
  );
};

export default withRouter(observer(LoginForm));
