import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { Uni211YesNoAndName } from './components/Uni211YesNoAndName';
import { CNUniAverageScore } from './components/CNUniAverageScore';
import { EngTest } from './components/EngTest';
import { NZStudyAreasAll } from './components/NZStudyAreasAll';
import { CNStudyArea } from './components/CNStudyArea';
import { CaseWrapper } from './components/CaseWrapper';

export const Step3Case1Input: React.FC = observer(() => {
  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <Uni211YesNoAndName />
      <CNUniAverageScore />
      <EngTest />
      <NZStudyAreasAll />
      <CNStudyArea />
    </CaseWrapper>
  );
});
