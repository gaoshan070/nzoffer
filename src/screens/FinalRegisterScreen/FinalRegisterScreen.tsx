import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../routes/routes';
import Box from '../../components/Box/Box';
import LoginForm from './components/LoginForm/LoginForm';

const handleGoBack = (history: History) => {
  const canGoBack = history.length > 1;

  if (canGoBack) {
    history.goBack();
  } else {
    history.replace(ROUTES.HOME);
  }
};

const FinalRegisterScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  // Un-comment when ready to deploy
  // const { whenComeNZ } = useContext(
  //   ChatScreenStoreContext,
  // );

  // if (!whenComeNZ) {
  //   handleGoBack(history);
  //   return null;
  // }

  return <LoginForm />;
};

export default observer(FinalRegisterScreen);
