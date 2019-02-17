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
import {
  uiState,
  validateStep3,
  getCaseNum,
} from '../../../../shared/regStep3UIState';
import Alert from 'react-s-alert';
import { patchUser, IRegUser } from '../components/utils';

type KeyofUIState = keyof typeof uiState;
type KeyofIRegUser = keyof IRegUser;

export const Step3EducationBackgroundScreen: React.FC<
  RouteComponentProps
> = observer(({ history }) => {
  const { regStore } = useContext(StoreContext);

  function onSaveClick() {
    keepCaseOnly(regStore);

    const caseNum = getCaseNum(
      regStore.isDegreeGetInChina,
      regStore.chinaDegree,
    );

    if (!caseNum) return;

    const keys = uiState[caseNum as KeyofUIState];

    const userInfo: Partial<IRegUser> = {};
    keys.forEach(key => {
      userInfo[key as KeyofIRegUser] = regStore[key as KeyofIRegUser];
    });

    console.log(userInfo);
  }

  function onContinueClick() {
    if (!validateStep3(regStore)) {
      Alert.warning('还没有全部填完哦，加油 😊');
      return;
    }

    history.push(ROUTES.SELECT_SCHOOL);
  }

  return (
    <Screen>
      <Box direction="column" pt={SPACE.medium}>
        <Step3Inputs hideOpenButton />
      </Box>
      <BottomNavBar
        history={history}
        saveOnClick={onSaveClick}
        continueOnClick={onContinueClick}
      />
    </Screen>
  );
});
