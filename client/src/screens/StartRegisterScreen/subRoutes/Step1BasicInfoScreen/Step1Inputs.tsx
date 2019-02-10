import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { Box, SPACE } from '../../../../styles';
import { useRegStoreField } from '../../../../miscellaneous/hooks';
import { StoreContext } from '../../../../store/store.context';
import { dateCheck } from '../../../../shared/dateCheck';
import { nameCheck } from '../../../../shared/nameCheck';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';

export const Step1Inputs: React.FC = observer(() => {
  const [firstName, onFirstNameChange] = useRegStoreField('firstName');
  const [lastName, onLastNameChange] = useRegStoreField('lastName');
  const [birthday, onBirthdayChange] = useRegStoreField('birthday');
  const [gender, onGenderChange] = useRegStoreField('gender');

  return (
    <InputsBox label="基本信息" shouldOpen>
      <Input
        type="text"
        placeholder="请输入姓"
        validate={nameCheck.isNameValid}
        errorMessage="请正确输入你尊贵的姓氏"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <Input
        type="text"
        placeholder="请输入名"
        validate={nameCheck.isNameValid}
        errorMessage="请正确输入你的鼎鼎大名"
        value={lastName}
        onChange={onLastNameChange}
      />
      <Input
        type="text"
        placeholder="请输入生日: 2000/08/18"
        validate={v => !dateCheck.validDateStr(v).error}
        errorMessage={v => dateCheck.validDateStr(v).errMsg}
        value={birthday}
        onChange={onBirthdayChange}
      />
      <RadioGroup
        name="gender"
        selectedValue={gender}
        onChange={onGenderChange}
        alignItems="center"
        gap={SPACE.xSmall}
        mb={SPACE.xxSmall}
      >
        <RadioButton value="男" label="男" />
        <RadioButton value="女" label="女" />
      </RadioGroup>
    </InputsBox>
  );
});
