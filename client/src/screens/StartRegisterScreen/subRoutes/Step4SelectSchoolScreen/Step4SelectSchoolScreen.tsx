import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Screen from '../../../../components/Screen';
import { Box, SPACE, is } from '../../../../styles';
import { BottomNavBar } from '../components/BottomNavBar';
import { ROUTES } from '../../../../routes/routesConfig';
import { Step4Loading } from './components/Step4Loading';
import { UniList } from './components/UniList';
import { useRegStore } from '../../../../store/store.context';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { IProgramme } from '../../../../store/AdminStore.type';
import { StartRegScreen } from '../../components/StartRegScreen';

export const Step4SelectSchoolScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const [isLongEnough, setIsLongEnough] = useState(false);
    const {
      firstName,
      lastName,
      programmesPool,
      programmesPoolLoadingStatus,
      fetchProgrammesSelection,
    } = useRegStore();

    useComponentDidMount(async () => {
      await fetchProgrammesSelection();
    });

    setTimeout(() => {
      setIsLongEnough(true);
    }, 8000);

    useEffect(() => {
      return () => {
        setIsLongEnough(false);
      };
    }, [setIsLongEnough]);

    const shouldNotDisplay =
      !isLongEnough && !is.loaded(programmesPoolLoadingStatus);

    return (
      <Screen>
        <Box
          direction="column"
          alignItems="center"
          bg="background"
          height="max-content"
          py={SPACE.xxxSmall}
          px={shouldNotDisplay ? SPACE.xLarge : 'none'}
        >
          {shouldNotDisplay ? (
            <Step4Loading name={`${lastName}${firstName}`} />
          ) : (
            <UniList
              history={history}
              caseNum={programmesPool.case}
              programmes={programmesPool.programmes as IProgramme[]}
            />
          )}
        </Box>
        <BottomNavBar noContinueButton />
      </Screen>
    );
  },
);
