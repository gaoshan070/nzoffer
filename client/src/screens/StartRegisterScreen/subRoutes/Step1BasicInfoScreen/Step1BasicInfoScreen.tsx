import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { Screen } from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step1Inputs } from './Step1Inputs';
import { StoreContext } from '../../../../store/store.context';
import { validDateStr } from '../../../../shared/dateCheck';
import { isChinese } from '../../../../shared/cnCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';
import { getUserId, getJWTObject } from '../../../../utils/token';
import { userService, feathersApp } from '../../../../utils/feathers';
import { patchUser } from '../components/utils';

export const Step1BasicInfoScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { firstName, lastName, birthday, gender } = useContext(
      StoreContext,
    ).regStore;

    const isStep1Ready = () =>
      isChinese(firstName) &&
      isChinese(lastName) &&
      validDateStr(birthday) &&
      gender !== '';

    return (
      <Screen>
        <Box direction="column" pt={SPACE.large} alignItems="center">
          <Step1Inputs hideOpenButton />
          <BottomNavBar
            history={history}
            saveOnClick={async () => {
              return patchUser({
                firstName,
                lastName,
                birthday,
                gender,
              });
            }}
            continueOnClick={() => {
              if (!isStep1Ready()) {
                Alert.error('还有项目没正确填写，加油哦亲');
                return;
              }

              return patchUser(
                {
                  firstName,
                  lastName,
                  birthday,
                  gender,
                },
                false,
                () => {
                  history.push(ROUTES.CONTACT_METHODS);
                },
              );
            }}
          />
        </Box>
      </Screen>
    );
  },
);
