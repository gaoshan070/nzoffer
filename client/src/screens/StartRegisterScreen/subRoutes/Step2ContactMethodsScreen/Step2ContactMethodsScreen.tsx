import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Button, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import Screen from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step2Inputs } from './Step2Inputs';
import { StoreContext } from '../../../../store/store.context';
import { nameCheck } from '../../../../shared/nameCheck';
import { emailCheck } from '../../../../shared/emailCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';

const isNotEmptyString = (v: unknown) => v != null && v !== '';

export const Step2ContactMethodsScreen: React.FC<
  RouteComponentProps
> = observer(({ history }) => {
  const { streetName, streetNum, province, city, email } = useContext(
    StoreContext,
  ).regStore;

  const isStep2Ready = () =>
    nameCheck.isNameValid(streetNum) &&
    nameCheck.isNameValid(streetName) &&
    isNotEmptyString(province.id) &&
    isNotEmptyString(province.name) &&
    isNotEmptyString(city.id) &&
    isNotEmptyString(city.name) &&
    isNotEmptyString(city.provinceId) &&
    emailCheck.isEmailValid(email);

  return (
    <Screen>
      <Box direction="column" pt={SPACE.large}>
        <Step2Inputs hideOpenButton />
      </Box>
      <BottomNavBar
        history={history}
        continueOnClick={() => {
          if (isStep2Ready()) {
            history.push(ROUTES.EDUCATION_BACKGROUND);
          } else {
            Alert.warning('还有项目没正确填写，加油哦亲');
          }
        }}
      />
    </Screen>
  );
});
