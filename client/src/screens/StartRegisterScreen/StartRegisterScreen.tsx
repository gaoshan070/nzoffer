import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { History } from 'history';
import { StoreContext } from '../../store/store.context';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../routes/routesConfig';
import StartRegForm from './components/StartRegForm/StartRegForm';
import Screen from '../../components/Screen';
import { ProgressBar } from './components/ProgressBar';
import { Box } from '../../styles/rebase/components';
import { SPACE } from '../../styles';

const handleGoBack = (history: History) => {
  const canGoBack = history.length > 1;

  if (canGoBack) {
    history.goBack();
  } else {
    history.replace(ROUTES.HOME);
  }
};

const StartRegisterScreen: React.FC<RouteComponentProps> = ({ history }) => {
  // const { whenComeNZ } = useContext(
  //   ChatScreenStoreContext,
  // );

  // if (!whenComeNZ) {
  //   handleGoBack(history);
  //   return null;
  // }

  return (
    <Screen>
      <Box
        direction="column"
        pt={SPACE.medium}
        pb={SPACE.xxxSmall}
        width={1}
        alignItems="center"
      >
        <StartRegForm />
      </Box>
    </Screen>
  );
};

export default observer(StartRegisterScreen);
