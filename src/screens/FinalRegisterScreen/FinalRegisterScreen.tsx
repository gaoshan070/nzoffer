import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../routes/routes';
import { FlexCard } from '../../components/buildingBlocks';

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

  return (
    <>
      Register Screen <FlexCard>asd</FlexCard>
    </>
  );
};

export default observer(FinalRegisterScreen);
