import React from 'react';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { Box, SPACE } from '../../../../styles';
import { useField } from '../../../../miscellaneous/hooks';

export const Step1Inputs: React.FC = () => {
  const [firstName, onFirstNameChange] = useField('');
  const [lastName, onLastNameChange] = useField('');
  const [birthday, onBirthdayChange] = useField('');

  return (
    <InputsBox label="基本信息" shouldOpen>
      <Input
        type="text"
        placeholder="请输入姓"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <Input
        type="text"
        placeholder="请输入名"
        value={lastName}
        onChange={onLastNameChange}
      />
      <Input
        type="text"
        placeholder="请输入生日 2000/10/01"
        value={birthday}
        onChange={onBirthdayChange}
      />
      <Box alignSelf="end">
        <YesOrNo
          yesText="男"
          noText="女"
          value
          onClick={x => () => 0}
        />
      </Box>
    </InputsBox>
  );
};
