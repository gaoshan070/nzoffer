import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { CNHighSchoolName } from './components/CNHighSchoolName';
import { EngTest } from './components/EngTest';
import { CaseWrapper } from './components/CaseWrapper';

export const Step3Case3Input: React.FC = observer(() => {
  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <CNHighSchoolName />
      <EngTest />
    </CaseWrapper>
  );
});
