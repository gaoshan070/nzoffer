import React from 'react';
import { useHistory, useComponentDidMount } from '../../../miscellaneous/hooks';
import { Screen } from '../../../components/Screen';
import { FlatButton } from '../../../styles';
import { ROUTES } from '../../../routes/routesConfig';
import { useRegStore } from '../../../store/store.context';
import { feathersApp } from '../../../utils/feathers';

export const StartRegScreen: React.FC = ({ children }) => {
  const history = useHistory();
  const { fetchUserIfNoData } = useRegStore();
  useComponentDidMount(fetchUserIfNoData);

  return (
    <Screen
      headerBox={() => {
        return (
          <FlatButton
            fontSize="16px"
            fontWeight="900"
            color="lightBlue"
            onClick={() => {
              history.push(ROUTES.HOME);
              feathersApp.logout();
            }}
          >
            退 出
          </FlatButton>
        );
      }}
    >
      {children}
    </Screen>
  );
};
