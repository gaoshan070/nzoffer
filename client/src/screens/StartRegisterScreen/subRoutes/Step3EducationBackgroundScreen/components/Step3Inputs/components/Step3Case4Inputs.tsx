import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { CNHighSchoolName } from './components/CNHighSchoolName';
import {
  useRegStoreDropDown,
  useRegStoreField,
} from '../../../../../../../miscellaneous/hooks';
import {
  RadioGroup,
  RadioButton,
} from '../../../../../../../components/RadioGroup/RadioGroup';
import { Box } from '../../../../../../../styles';
import DropDown from '../../../../../../../components/DropDown/DropDown';
import { sharedData } from '../../../../../../../shared/sharedData';
import { EngTest } from './components/EngTest';
import { NZStudyAreasAll } from './components/NZStudyAreasAll';
import { CaseWrapper } from './components/CaseWrapper';
import { sharedDropDownStyle } from '../../../../components/sharedDropDown';

export const Step3Case4Input: React.FC = observer(() => {
  const [haveGaoKaoScore, onHaveGaoKaoScoreChange] = useRegStoreField(
    'haveGaoKaoScore',
  );

  const [gaoKaoScoreLevel, onGaoKaoScoreLevelChange] = useRegStoreDropDown(
    'gaoKaoScoreLevel',
  );

  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <Box justifyContent="between">
        <Box>你是否有高考成绩?</Box>
        <RadioGroup
          name="haveGaoKaoScore"
          selectedValue={haveGaoKaoScore}
          onChange={onHaveGaoKaoScoreChange}
          alignItems="center"
        >
          <RadioButton value label="是" />
          <RadioButton value={false} label="否" />
        </RadioGroup>
      </Box>
      <DropDown
        defaultText="请选择你的高考成绩"
        toDisplay={gaoKaoScoreLevel}
        items={sharedData.gaoKaoScoreLevel}
        whenSelectItem={onGaoKaoScoreLevelChange}
        boxProps={{
          ...sharedDropDownStyle,
          width: '100%',
        }}
        itemStyle={{
          paddingLeft: '4.5rem',
        }}
      />
      <CNHighSchoolName />
      <EngTest />
      <NZStudyAreasAll />
    </CaseWrapper>
  );
});
