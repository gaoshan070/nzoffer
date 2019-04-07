import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, FlatButton, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { Screen } from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step1Inputs } from './Step1Inputs';
import { StoreContext } from '../../../../store/store.context';
import { validDateStr } from '../../../../shared/dateCheck';
import { isChinese } from '../../../../shared/cnCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';
import { patchUser } from '../components/utils';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import {
  AnimationComponent,
  DownInChild,
} from '../../../../components/Animated';
import { StartRegScreen } from '../../components/StartRegScreen';

export const Step1BasicInfoScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { firstName, lastName, birthday, gender, fetchUser } = useContext(
      StoreContext,
    ).regStore;

    const isStep1Ready = () =>
      isChinese(firstName) &&
      isChinese(lastName) &&
      validDateStr(birthday) &&
      gender !== '';

    useComponentDidMount(async () => {
      await fetchUser();
    });

    return (
      <StartRegScreen>
        <Box direction="column" pt={SPACE.large} alignItems="center">
          <AnimationComponent>
            <DownInChild key="syep1">
              <Step1Inputs hideOpenButton />
            </DownInChild>
          </AnimationComponent>
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
      </StartRegScreen>
    );
  },
);
