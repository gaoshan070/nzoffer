import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { CaseWrapper } from './components/CaseWrapper';
import { CNHighSchoolName } from './components/CNHighSchoolName';

export const Step3Case1Input: React.FC = observer(() => {
  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <CNHighSchoolName />
    </CaseWrapper>
  );
});
