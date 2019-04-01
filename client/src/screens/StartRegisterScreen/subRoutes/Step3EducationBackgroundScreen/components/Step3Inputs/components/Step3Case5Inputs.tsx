import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { CNHighSchoolName } from './components/CNHighSchoolName';
import { EngTest } from './components/EngTest';
import { CaseWrapper } from './components/CaseWrapper';
import { Uni211YesNoAndName } from './components/Uni211YesNoAndName';
import { CNUniAverageScore } from './components/CNUniAverageScore';
import { NZStudyAreasAll } from './components/NZStudyAreasAll';
import { CNStudyArea } from './components/CNStudyArea';
import { useRegStoreField } from '../../../../../../../miscellaneous/hooks';
import { Box } from '../../../../../../../styles';
import {
  RadioGroup,
  RadioButton,
} from '../../../../../../../components/RadioGroup/RadioGroup';

export const Step3Case5Input: React.FC = observer(() => {
  const [hasWorkExperiences, onHasWorkExperiencesChange] = useRegStoreField(
    'hasWorkExperiences',
  );

  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <EngTest />
      <Uni211YesNoAndName />
      <CNUniAverageScore />
      <NZStudyAreasAll />
      <CNStudyArea />
      <Box justifyContent="between">
        <Box>你是否有工作经验?</Box>
        <RadioGroup
          name="hasWorkExperiences"
          selectedValue={hasWorkExperiences}
          onChange={onHasWorkExperiencesChange}
          alignItems="center"
        >
          <RadioButton value label="是" />
          <RadioButton value={false} label="否" />
        </RadioGroup>
      </Box>
    </CaseWrapper>
  );
});
