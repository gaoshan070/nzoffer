import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Screen from '../../../../components/Screen';
import { Box, SPACE } from '../../../../styles';
import { BottomNavBar } from '../components/BottomNavBar';
import { ROUTES } from '../../../../routes/routesConfig';
import { Step4Loading } from './components/Step4Loading';
import { schools, Schools } from './components/Schools';

export const Step4SelectSchoolScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [toRender, setToRender] = useState(<Step4Loading name="Max Ma" />);

  setTimeout(() => {
    setToRender(<Schools history={history} schools={[...schools]} />);
  }, 3000);

  const isLoading = typeof toRender.props['name'] === 'string';

  return (
    <Screen>
      <Box
        direction="column"
        alignItems="center"
        bg="background"
        height="max-content"
        py={SPACE.small}
        px={isLoading ? 'xlarge' : 'none'}
      >
        {toRender}
      </Box>
      <BottomNavBar
        history={history}
        continueOnClick={() => {
          history.push(ROUTES.SELECTION_INFO);
        }}
      />
    </Screen>
  );
};
