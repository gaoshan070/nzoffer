import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Button, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import Screen from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step3Inputs } from './Step3Inputs';

export const Step3EducationBackgroundScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  return (
    <Screen>
      <Box direction="column" py={SPACE.medium} overflowY="auto">
        <Step3Inputs hideOpenButton />
      </Box>
      <BottomNavBar
        history={history}
        continueOnClick={() => {
          history.push(ROUTES.SELECT_SCHOOL);
        }}
      />
    </Screen>
  );
};
