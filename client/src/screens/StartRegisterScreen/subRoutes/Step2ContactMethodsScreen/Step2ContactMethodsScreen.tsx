import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Button, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import Screen from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step2Inputs } from './Step2Inputs';
import { StoreContext } from '../../../../store/store.context';
import { isChinese } from '../../../../shared/cnCheck';
import { isEmailValid } from '../../../../shared/emailCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';
import {
  isStreetNameValid,
  isStreetNumValid,
} from '../../../../shared/streetNameNumCheck';
import { patchUser, IRegUser } from '../components/utils';
import {
  AnimationComponent,
  DownInChild,
} from '../../../../components/Animated';

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

  const saveBtnOnClick = () => {
    const user: Partial<IRegUser> = {};

    if (streetNum && isStreetNumValid(streetNum)) {
      user.streetNum = streetNum;
    }

    if (streetName && isStreetNameValid(streetName)) {
      user.streetName = streetName;
    }

    if (province.id && province.name) {
      user.province = province;
    }

    if (city.id && city.name && city.provinceId) {
      user.city = city;
    }

    if (isEmailValid(email)) {
      user.email = email;
    }

    if (Object.keys(user).length === 0) {
      Alert.error('童鞋，啥都没填呢，你想保存啥啊？ 😂');
      return;
    }

    return patchUser(user);
  };

  return (
    <Screen>
      <Box direction="column" pt={SPACE.large}>
        <AnimationComponent>
          <DownInChild key="step2">
            <Step2Inputs hideOpenButton />
          </DownInChild>
        </AnimationComponent>
      </Box>
      <BottomNavBar
        history={history}
        saveOnClick={saveBtnOnClick}
        continueOnClick={() => {
          if (!isStep2Ready()) {
            Alert.error('还有项目没正确填写，加油哦亲');
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
      />
    </Screen>
  );
});
