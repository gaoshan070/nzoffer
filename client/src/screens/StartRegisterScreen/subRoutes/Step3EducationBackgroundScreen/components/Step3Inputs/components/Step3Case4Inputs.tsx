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

export const Step3Case4Input: React.FC = observer(() => {
  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <EngTest />
      <Uni211YesNoAndName />
      <CNUniAverageScore />
      <NZStudyAreasAll />
      <CNStudyArea />
    </CaseWrapper>
  );
});
