import React from 'react';
import { RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import StartRegForm from './components/StartRegForm/StartRegForm';
import Screen from '../../components/Screen';
import { Box } from '../../styles/rebase/components';
import { SPACE } from '../../styles';
import { AnimationComponent, DownInChild } from '../../components/Animated';
import { History } from 'history';
import { ROUTES } from '../../routes/routesConfig';
import { useChatStore } from '../../store/store.context';

const handleGoBack = (history: History) => {
  const canGoBack = history.length > 1;

  if (canGoBack) {
    history.goBack();
  } else {
    history.replace(ROUTES.HOME);
  }
};

const StartRegisterScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const { whenComeNZ } = useChatStore();

  if (!whenComeNZ.month && !whenComeNZ.year) {
    handleGoBack(history);
    return null;
  }

  return (
    <Screen>
      <Box
        direction="column"
        pt={SPACE.medium}
        pb={SPACE.xxxSmall}
        width={1}
        justifyContent="center"
        alignItems="center"
      >
        <AnimationComponent
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <DownInChild key="startReg">
            <StartRegForm />
          </DownInChild>
        </AnimationComponent>
      </Box>
    </Screen>
  );
};

export default observer(StartRegisterScreen);
