import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import {
  Box,
  Button,
  SPACE,
} from '../../../../styles';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { useField } from '../../../../miscellaneous/hooks';
import { ROUTES } from '../../../../routes/routesConfig';
import ChinaUniListDropDown from './components/ChinaUniListDropDown';
import RecentDegreeDropDown from './components/RecentDegree';
import Screen from '../../../../components/Screen';
import { ProgressBar } from '../../components/ProgressBar';
import { BottomNavBar } from '../components/BottomNavBar';

export const Step3EducationBackgroundScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  const [uniScore, onUniScoreChange] = useField('');
  const [uniName, onUniNameChange] = useField('');
  const [
    englishScore,
    onEnglishScoreChange,
  ] = useField('');
  const [is985, setIs985] = useState<boolean>(false);

  return (
    <Screen>
      <Box direction="column" pt={SPACE.large}>
        <ProgressBar progress={0.8} />
        <InputsBox label="学历状况" shouldOpen>
          <RecentDegreeDropDown />
          <Box
            justifyContent="between"
            gap={SPACE.small}
            direction="column"
          >
            <Box>你所就读的学校是否属于211院校</Box>
            <Box alignSelf="end">
              <YesOrNo
                yesText="是"
                noText="否"
                value={is985}
                initialState={is985}
                onClick={x => () => {
                  setIs985(x);
                }}
              />
            </Box>
          </Box>
          {is985 ? (
            <ChinaUniListDropDown />
          ) : (
            <Input
              type="text"
              placeholder="请输入你的大学名称"
              value={uniName}
              onChange={onUniNameChange}
            />
          )}

          <Input
            type="text"
            placeholder="请输入你的大学平均成绩"
            value={uniScore}
            onChange={onUniScoreChange}
          />
          <Input
            type="text"
            placeholder="请输入你的英文测试成绩"
            value={englishScore}
            onChange={onEnglishScoreChange}
          />
        </InputsBox>
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
