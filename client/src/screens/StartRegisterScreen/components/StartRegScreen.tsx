import React from 'react';
import { useComponentDidMount } from '../../../miscellaneous/hooks';
import { Screen } from '../../../components/Screen';
import { useRegStore } from '../../../store/store.context';
import { observer } from 'mobx-react-lite';

export const StartRegScreen: React.FC = observer(({ children }) => {
  const { fetchUserIfNoData } = useRegStore();
  useComponentDidMount(fetchUserIfNoData);

  return (
    <Screen maxHeight="100vh" overflowY="auto" hasExitButton>
      {children}
    </Screen>
  );
});
