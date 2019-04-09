import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Screen from '../../../../components/Screen';
import { Box, SPACE, is } from '../../../../styles';
import { BottomNavBar } from '../components/BottomNavBar';
import { ROUTES } from '../../../../routes/routesConfig';
import { Step4Loading } from './components/Step4Loading';
import { schools, Schools } from './components/Schools';
import { useRegStore } from '../../../../store/store.context';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';

export const Step4SelectSchoolScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [toRender, setToRender] = useState(<Step4Loading name="Max Ma" />);
  const [isLongEnough, setIsLongEnough] = useState(false);

  const {
    firstName,
    lastName,
    programmesPool,
    programmesPoolLoadingStatus,
    fetchProgrammesSelection,
  } = useRegStore();

  useComponentDidMount(fetchProgrammesSelection);

  setTimeout(() => {
    setIsLongEnough(true);
  }, 3000);

  const shouldNotDisplay =
    !isLongEnough || is.loading(programmesPoolLoadingStatus);

  return (
    <Screen>
      <Box
        direction="column"
        alignItems="center"
        bg="background"
        height="max-content"
        py={SPACE.small}
        px={shouldNotDisplay ? 'xlarge' : 'none'}
      >
        {shouldNotDisplay ? (
          <Step4Loading name={`${lastName}${firstName}`} />
        ) : (
          <Schools history={history} schools={[...schools]} />
        )}
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
