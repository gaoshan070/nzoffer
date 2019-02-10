import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { Box, SPACE } from '../../../../styles';
import { useRegStoreField } from '../../../../miscellaneous/hooks';
import { StoreContext } from '../../../../store/store.context';
import { dateCheck } from '../../../../shared/dateCheck';

export const Step1Inputs: React.FC = observer(() => {
  const [
    firstName,
    onFirstNameChange,
  ] = useRegStoreField('firstName');
  const [
    lastName,
    onLastNameChange,
  ] = useRegStoreField('lastName');
  const [
    birthday,
    onBirthdayChange,
  ] = useRegStoreField('birthday');

  return (
    <InputsBox label="基本信息" shouldOpen>
      <Input
        type="text"
        placeholder="请输入姓"
        validate={v => v !== ''}
        errorMessage="请输入 姓"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <Input
        type="text"
        placeholder="请输入名"
        validate={v => v !== ''}
        errorMessage="请输入 名"
        value={lastName}
        onChange={onLastNameChange}
      />
      <Input
        type="text"
        placeholder="请输入生日 2000/08/18"
        validate={v =>
          !dateCheck.validDateStr(v).error
        }
        errorMessage={v =>
          dateCheck.validDateStr(v).errMsg
        }
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
});
