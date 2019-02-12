import React, { useState } from 'react';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import ChinaUniListDropDown from './components/ChinaUniListDropDown';
import RecentDegreeDropDown from './components/RecentDegree';
import { useField, useRegStoreField } from '../../../../miscellaneous/hooks';
import { Box, Button, SPACE } from '../../../../styles';
import { observer } from 'mobx-react-lite';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';

export const Step3Inputs: React.FC<{ hideOpenButton?: boolean }> = observer(
  ({ hideOpenButton }) => {
    const [uniScore, onUniScoreChange] = useField('');
    const [uniName, onUniNameChange] = useField('');
    const [englishScore, onEnglishScoreChange] = useField('');
    const [is211, onIs211Change] = useRegStoreField('is211school');

    return (
      <InputsBox label="学历状况" shouldOpen hideOpenButton={hideOpenButton}>
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
        {is211 === 'true' ? (
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
  },
);
