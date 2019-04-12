import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
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
import {
  AnimationComponent,
  DownInChild,
} from '../../../../components/Animated';
import { StartRegScreen } from '../../components/StartRegScreen';
import { RegStore } from '../../../../store/RegStore';

type KeyofUIState = keyof typeof uiState;
type KeyofIRegUser = keyof IRegUser;

function prepareToSave(regStore: RegStore): Partial<IRegUser> | 0 {
  keepCaseOnly(regStore);

  const caseNum = getCaseNum(regStore.isDegreeGetInChina, regStore.chinaDegree);

  if (!caseNum) {
    Alert.error('请先选择学历状况哦');
    return 0;
  }

  const keys = uiState[caseNum as KeyofUIState];

  const userInfo: Partial<IRegUser> = {};
  keys.forEach(key => {
    // @ts-ignore
    const valueToSave = regStore[key as KeyofIRegUser];

    if (
      (typeof valueToSave === 'string' && valueToSave !== '') ||
      typeof valueToSave === 'boolean'
    ) {
      userInfo[key as KeyofIRegUser] = valueToSave;
    }
  });

  if (userInfo.hasOwnProperty('nzStudyArea')) {
    userInfo.nzStudyArea = regStore.nzStudyAreaId;
  }
  if (userInfo.hasOwnProperty('nzStudyAreaDetail')) {
    userInfo.nzStudyAreaDetail = regStore.nzStudyAreaDetailId;
  }
  if (userInfo.hasOwnProperty('cnStudyArea')) {
    userInfo.cnStudyArea = regStore.cnStudyAreaId;
  }
  return userInfo;
}

export const Step3EducationBackgroundScreen: React.FC<
  RouteComponentProps
> = observer(({ history }) => {
  const { regStore } = useContext(StoreContext);

  async function onSaveClick() {
    const regUserInfo = prepareToSave(regStore);

    if (regUserInfo) {
      await patchUser(regUserInfo);
    } else {
      Alert.error('信息未填写完');
    }
  }

  async function onContinueClick() {
    if (!validateStep3(regStore)) {
      Alert.warning('还没有全部填完哦，加油');
      return;
    }
    const regUserInfo = prepareToSave(regStore);

    if (regUserInfo) {
      await patchUser(regUserInfo, false, async () => {
        history.push(ROUTES.SELECT_SCHOOL);
      });
    }
  }

  return (
    <StartRegScreen>
      <Box direction="column" py={SPACE.medium}>
        <AnimationComponent>
          <DownInChild key="step3">
            <Step3Inputs hideOpenButton />
          </DownInChild>
        </AnimationComponent>
      </Box>
      <BottomNavBar
        history={history}
        saveOnClick={onSaveClick}
        continueOnClick={onContinueClick}
      />
    </StartRegScreen>
  );
});
