import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { EngTest } from './components/EngTest';
import { CaseWrapper } from './components/CaseWrapper';
import { CNHighSchoolName } from './components/CNHighSchoolName';

export const Step3Case2Input: React.FC = observer(() => {
  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <CNHighSchoolName />
      <EngTest />
    </CaseWrapper>
  );
});
