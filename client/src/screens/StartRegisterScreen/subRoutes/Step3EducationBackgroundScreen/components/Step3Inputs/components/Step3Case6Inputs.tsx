import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRegStoreField } from '../../../../../../../miscellaneous/hooks';
import { Input } from '../../../../../../../components/Input';
import { OverseaUniAverageScore } from './components/OverseaUniAverageScore';
import { EngTest } from './components/EngTest';
import { NZStudyAreasAll } from './components/NZStudyAreasAll';
import { CaseWrapper } from './components/CaseWrapper';
import { Box } from '../../../../../../../styles';
import {
  RadioGroup,
  RadioButton,
} from '../../../../../../../components/RadioGroup/RadioGroup';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';

export const Step3Case6Input: React.FC = observer(() => {
  const [overseaUniNameEN, onOverseaUniNameENChange] = useRegStoreField(
    'overseaUniNameEN',
  );

  const [
    overseaStudyAreaNameEN,
    onOverseaStudyAreaNameENChange,
  ] = useRegStoreField('overseaStudyAreaNameEN');

  const [isDegreeGetInChina, onIsDegreeGetInChinaChange] = useRegStoreField(
    'isDegreeGetInChina',
  );

  return (
    <CaseWrapper>
      <Box gap={'60px'}>
        <Box pl={'17px'}>是否在中国取得学历？</Box>
        <RadioGroup
          name="isDegreeGetInChina"
          selectedValue={isDegreeGetInChina}
          onChange={onIsDegreeGetInChinaChange}
          alignItems="center"
          gap={'40px'}
        >
          <RadioButton value label="是" />
          <RadioButton value={false} label="否" />
        </RadioGroup>
      </Box>
      {isDegreeGetInChina && <ChinaDegreeDropDown />}
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
      <EngTest isOpenToTop />
      <NZStudyAreasAll />
    </CaseWrapper>
  );
});
