import React, { useState } from 'react';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import ChinaUniListDropDown from './components/ChinaUniListDropDown';
import RecentDegreeDropDown from './components/RecentDegree';
import { useField } from '../../../../miscellaneous/hooks';
import { Box, Button, SPACE } from '../../../../styles';
import { observer } from 'mobx-react-lite';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';
import { useRegStoreField } from '../../../../miscellaneous/hooks';

export const Step3Inputs: React.FC = observer(() => {
  const [uniScore, onUniScoreChange] = useField('');
  const [uniName, onUniNameChange] = useField('');
  const [englishScore, onEnglishScoreChange] = useField('');
  const [is985, setIs985] = useState<boolean>(false);
  const [is211, onIs211Change] = useRegStoreField('is211school');

  return (
    <InputsBox label="学历状况" shouldOpen>
      <RecentDegreeDropDown />
      <Box justifyContent="between" gap={SPACE.xxSmall} direction="column">
        <Box>你所就读的学校是否属于211院校</Box>
        <RadioGroup
          name="is211"
          selectedValue={is211}
          onChange={onIs211Change}
          alignItems="center"
          mb={SPACE.xxSmall}
        >
          <RadioButton value={'true'} label="是" />
          <RadioButton value={'false'} label="否" />
        </RadioGroup>
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
  );
});
