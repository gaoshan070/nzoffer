import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { Step2Inputs } from './Step2Inputs';
import { StoreContext } from '../../../../store/store.context';
import { isEmailValid } from '../../../../shared/emailCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';
import {
  isStreetNameValid,
  isStreetNumValid,
} from '../../../../shared/streetNameNumCheck';
import { patchUser } from '../components/utils';
import {
  AnimationComponent,
  DownInChild,
} from '../../../../components/Animated';
import { StartRegScreen } from '../../components/StartRegScreen';

const isNotEmptyString = (v: unknown) => v != null && v !== '';

export const Step2ContactMethodsScreen: React.FC<
  RouteComponentProps
> = observer(({ history }) => {
  const { streetName, streetNum, province, city, email } = useContext(
    StoreContext,
  ).regStore;

  const isStep2Ready = () =>
    isStreetNumValid(streetNum) &&
    isStreetNameValid(streetName) &&
    isNotEmptyString(province.id) &&
    isNotEmptyString(province.name) &&
    isNotEmptyString(city.id) &&
    isNotEmptyString(city.name) &&
    isNotEmptyString(city.provinceId) &&
    isEmailValid(email);

  return (
    <StartRegScreen
      continueOnClick={() => {
        if (!isStep2Ready()) {
          Alert.error('还有项目没正确填写');
          return;
        }

        return patchUser(
          {
            streetName,
            streetNum,
            province,
            city,
            email,
          },
          true,
          () => {
            history.push(ROUTES.EDUCATION_BACKGROUND);
          },
        );
      }}
    >
      <Box direction="column" pt={SPACE.large}>
        <AnimationComponent>
          <DownInChild key="step2">
            <Step2Inputs hideOpenButton />
          </DownInChild>
        </AnimationComponent>
      </Box>
    </StartRegScreen>
  );
});
