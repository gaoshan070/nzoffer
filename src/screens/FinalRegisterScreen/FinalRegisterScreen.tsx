import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../routes/routes';
import { History } from 'history';

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
  const { whenComeNZ } = useContext(
    ChatScreenStoreContext,
  );

  if (!whenComeNZ) {
    handleGoBack(history);
    return null;
  }

  return <div>Register Screen</div>;
};

export default observer(FinalRegisterScreen);
