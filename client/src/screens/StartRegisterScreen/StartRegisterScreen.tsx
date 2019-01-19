import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../routes/routesConfig';
import LoginForm from './components/LoginForm/LoginForm';
import Screen from '../../components/Screen';

const handleGoBack = (history: History) => {
  const canGoBack = history.length > 1;

  if (canGoBack) {
    history.goBack();
  } else {
    history.replace(ROUTES.HOME);
  }
};

const StartRegisterScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  // const { whenComeNZ } = useContext(
  //   ChatScreenStoreContext,
  // );

  // if (!whenComeNZ) {
  //   handleGoBack(history);
  //   return null;
  // }

  return (
    <Screen>
      <LoginForm />
    </Screen>
  );
};

export default observer(StartRegisterScreen);
