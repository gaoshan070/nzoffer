import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import Screen from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step3Inputs } from './components/Step3Inputs';
import { observer } from 'mobx-react-lite';
import { keepCaseOnly } from '../../../../shared/regStep3KeepOnly.react';
import { StoreContext } from '../../../../store/store.context';
import { validateStep3 } from '../../../../shared/regStep3UIState';
import Alert from 'react-s-alert';

export const Step3EducationBackgroundScreen: React.FC<
  RouteComponentProps
> = observer(({ history }) => {
  const { regStore } = useContext(StoreContext);
  return (
    <Screen>
      <Box direction="column" pt={SPACE.medium}>
        <Step3Inputs hideOpenButton />
      </Box>
      <BottomNavBar
        history={history}
        saveOnClick={() => {
          keepCaseOnly(regStore);
        }}
        continueOnClick={() => {
          if (validateStep3(regStore)) {
            history.push(ROUTES.SELECT_SCHOOL);
          } else {
            Alert.warning('还没有全部填完哦，加油 😊');
          }
        }}
      />
    </Screen>
  );
});
