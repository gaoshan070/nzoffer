import React from 'react';
import { useComponentDidMount } from '../../../miscellaneous/hooks';
import { Screen } from '../../../components/Screen';
import { useRegStore } from '../../../store/store.context';
import { observer } from 'mobx-react-lite';
import { IBox } from '../../../styles/rebase/components';

export const StartRegScreen: React.FC<IBox> = observer(
  ({ children, ...rest }) => {
    const { fetchUserIfNoData } = useRegStore();
    useComponentDidMount(fetchUserIfNoData);

    return (
      <Screen height="100vh" width={1} hasExitButton {...rest}>
        {children}
      </Screen>
    );
  },
);
