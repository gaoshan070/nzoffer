import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRegStoreField } from '../../../../../../../miscellaneous/hooks';
import { Input } from '../../../../../../../components/Input';
import { OverseaUniAverageScore } from './components/OverseaUniAverageScore';
import { EngTest } from './components/EngTest';
import { NZStudyAreasAll } from './components/NZStudyAreasAll';
import { CaseWrapper } from './components/CaseWrapper';

export const Step3Case5Input: React.FC = observer(() => {
  const [overseaUniNameEN, onOverseaUniNameENChange] = useRegStoreField(
    'overseaUniNameEN',
  );
  const [
    overseaStudyAreaNameEN,
    onOverseaStudyAreaNameENChange,
  ] = useRegStoreField('overseaStudyAreaNameEN');

  return (
    <CaseWrapper>
      <Input
        type="text"
        placeholder="请用英文填写你所就读大学名称"
        value={overseaUniNameEN}
        onChange={onOverseaUniNameENChange}
      />
      <Input
        type="text"
        placeholder="请用英文填写你所就读专业名称"
        value={overseaStudyAreaNameEN}
        onChange={onOverseaStudyAreaNameENChange}
      />
      <OverseaUniAverageScore />
      <EngTest />
      <NZStudyAreasAll />
    </CaseWrapper>
  );
});
