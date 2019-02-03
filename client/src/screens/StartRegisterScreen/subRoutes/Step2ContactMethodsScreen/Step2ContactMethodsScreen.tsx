import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import {
  Box,
  Button,
  SPACE,
} from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { ROUTES } from '../../../../routes/routesConfig';
import Screen from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';

export const Step2ContactMethodsScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  const [streetNum, onStreetNumChange] = useField('');
  const [streetName, onStreetNameChange] = useField(
    '',
  );
  const [cityName, onCityNameChange] = useField('');
  const [email, onEmailChange] = useField('');

  return (
    <Screen>
      <Box direction="column" pt={SPACE.large}>
        <InputsBox label="联系方式" shouldOpen>
          <Input
            type="text"
            placeholder="街道号"
            value={streetNum}
            onChange={onStreetNumChange}
          />
          <Input
            type="text"
            placeholder="街道名"
            value={streetName}
            onChange={onStreetNameChange}
          />
          <Input
            type="text"
            placeholder="城市"
            value={cityName}
            onChange={onCityNameChange}
          />
          <Input
            type="email"
            placeholder="请输入电子邮箱"
            value={email}
            onChange={onEmailChange}
          />
        </InputsBox>
      </Box>
      <BottomNavBar
        history={history}
        continueOnClick={() => {
          history.push(ROUTES.EDUCATION_BACKGROUND);
        }}
      />
    </Screen>
  );
};
