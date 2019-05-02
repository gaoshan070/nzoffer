import React from 'react';
import { useComponentDidMount } from '../../../miscellaneous/hooks';
import { Screen } from '../../../components/Screen';
import { useRegStore } from '../../../store/store.context';
import { observer } from 'mobx-react-lite';
import { IBox } from '../../../styles/rebase/components';
import {
  BottomNavBar,
  IBottomNavBar,
} from '../subRoutes/components/BottomNavBar';

export const StartRegScreen: React.FC<IBox & IBottomNavBar> = observer(
  ({ noContinueButton, continueOnClick, children, ...rest }) => {
    const { fetchUserIfNoData } = useRegStore();
    useComponentDidMount(fetchUserIfNoData);

    return (
      <Screen height="100vh" width={1} hasExitButton {...rest}>
        {children}
        <BottomNavBar
          noContinueButton={noContinueButton}
          continueOnClick={continueOnClick}
        />
      </Screen>
    );
  },
);
