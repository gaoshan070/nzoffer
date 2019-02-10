import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Button, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import Screen from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step2Inputs } from './Step2Inputs';

export const Step2ContactMethodsScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  return (
    <Screen>
      <Box direction="column" pt={SPACE.large}>
        <Step2Inputs />
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
