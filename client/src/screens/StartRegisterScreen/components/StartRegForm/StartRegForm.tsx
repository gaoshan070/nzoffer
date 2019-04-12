import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter, RouteComponentProps } from 'react-router';
import { ROUTES } from '../../../../routes/routesConfig';
import HeaderLine from './components/HeaderLine';
import ValidationInput from './components/ValidationInput/ValidationInput';
import PhoneNumberCheck from './components/PhoneNumberCheck';
import {
  Box,
  Image,
  Button,
  Paragraph,
  SPACE,
  COLORS,
} from '../../../../styles';
import { Input } from '../../../../components/Input';
import LinkButton from '../../../../components/LinkButton';
import { feathersApp, regFromChatService } from '../../../../utils/feathers';
import { Passwords } from './components/Passwords';
import { StoreContext } from '../../../../store/store.context';
import Alert from 'react-s-alert';
import { ProgressBar } from '../ProgressBar';
import { runInAction } from 'mobx';
import loadingGIF from '../../../../assets/Loading-animation.gif';

const StartRegForm: React.FC<RouteComponentProps> = ({ history }) => {
  const { chatStore, regStore } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  const submit = async () => {
    if (!chatStore.isFormReady()) {
      Alert.info('还有几项没填');
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
        regStore.nzStudyAreaId = chatStore.nzStudyAreaId;
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
      justifyContent="center"
    >
      {isLoading ? (
        <Box height={'50vh'} alignItems="center">
          <Image src={loadingGIF} height="20px" />
          <Image src={loadingGIF} height="20px" />
        </Box>
      ) : (
        <>
          <ProgressBar progress={0.12} />
          <Box
            direction="column"
            width={1}
            bg="white1"
            mt={SPACE.xxxSmall}
            px={SPACE.small}
            py={SPACE.small}
          >
            <HeaderLine />
            <Box
              direction="column"
              py={SPACE.xxSmall}
              gap={SPACE.xxSmall}
              justifyContent="center"
            >
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
              <Button
                width={1 / 2}
                onClick={submit}
                minHeight="36px"
                maxHeight="36px"
              >
                注 册
              </Button>
            </Box>
          </Box>
          <Paragraph px={[SPACE.small, SPACE.large]} alignItems="center">
            注册代表你已同意{' '}
            <LinkButton
              borderBottom={'1px solid'}
              bg={COLORS.background}
              color={COLORS.lightBlue}
              px={1}
              fontSize="12px"
            >
              Offer111用户协议
            </LinkButton>
          </Paragraph>
        </>
      )}
    </Box>
  );
};

export default withRouter(observer(StartRegForm));
