import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { Step1Inputs } from './Step1Inputs';
import { StoreContext } from '../../../../store/store.context';
import { validDateStr } from '../../../../shared/dateCheck';
import { isChinese } from '../../../../shared/cnCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';
import { patchUser } from '../components/utils';
import {
  AnimationComponent,
  DownInChild,
} from '../../../../components/Animated';
import { StartRegScreen } from '../../components/StartRegScreen';

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
      <StartRegScreen
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
      >
        <Box direction="column" pt={SPACE.large} alignItems="center">
          <AnimationComponent>
            <DownInChild key="step1">
              <Step1Inputs hideOpenButton />
            </DownInChild>
          </AnimationComponent>
        </Box>
      </StartRegScreen>
    );
  },
);
