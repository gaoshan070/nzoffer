import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter, RouteComponentProps } from 'react-router';
import { ROUTES } from '../../../../routes/routesConfig';
import HeaderLine from './components/HeaderLine';
import ValidationInput from './components/ValidationInput/ValidationInput';
import PhoneNumberCheck from './components/PhoneNumberCheck';
import { Box, Button, Paragraph, SPACE, COLORS } from '../../../../styles';
import { Input } from '../../../../components/Input';
import LinkButton from '../../../../components/LinkButton';
import { feathersApp, regFromChatService } from '../../../../utils/feathers';
import { Passwords } from './components/Passwords';
import { StoreContext } from '../../../../store/store.context';
import Alert from 'react-s-alert';
import { ProgressBar } from '../ProgressBar';
import { runInAction } from 'mobx';

const StartRegForm: React.FC<RouteComponentProps> = ({ history }) => {
  const { chatStore, regStore } = useContext(StoreContext);

  const submit = async () => {
    if (!chatStore.isFormReady()) {
      Alert.info('还有几项没填哦，加油😀');
      return;
    }

    try {
      const data = chatStore.collectRegFromChatData();
      await regFromChatService.create(data);

      runInAction(() => {
        regStore.province.id = chatStore.province.id;
        regStore.province.name = chatStore.province.name;
        regStore.chinaDegree = chatStore.chinaDegree;
        regStore.nzStudyArea = chatStore.nzStudyArea;
        regStore.isDegreeGetInChina = chatStore.isDegreeGetInChina || false;
      });

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
      width={[0.9, '400px']}
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
        mt={SPACE.xxxSmall}
        px={[SPACE.small, SPACE.small]}
        py={SPACE.small}
      >
        <HeaderLine />
        <Box direction="column" py={SPACE.xxSmall} gap={SPACE.xxSmall}>
          <Input
            type="text"
            placeholder="请输入手机号"
            value={chatStore.phone !== 0 ? chatStore.phone : ''}
            validate={/^\d{11}$/}
            errorMessage="请输入正确的手机号"
            onChange={e => {
              // debugger;
              chatStore.update(
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
        <LinkButton bg={COLORS.background} color={COLORS.lightBlue} px={2}>
          Offer111用户协议
        </LinkButton>
      </Paragraph>
    </Box>
  );
};

export default withRouter(observer(StartRegForm));
