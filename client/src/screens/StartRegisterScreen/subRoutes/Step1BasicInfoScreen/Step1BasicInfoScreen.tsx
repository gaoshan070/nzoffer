import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { Screen } from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step1Inputs } from './Step1Inputs';

export const Step1BasicInfoScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  return (
    <Screen>
      <Box direction="column" pt={SPACE.large} alignItems="center">
        <Step1Inputs />
        <BottomNavBar
          history={history}
          continueOnClick={() => {
            history.push(ROUTES.CONTACT_METHODS);
          }}
        />
      </Box>
    </Screen>
  );
};
