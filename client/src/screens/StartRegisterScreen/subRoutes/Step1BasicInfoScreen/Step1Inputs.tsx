import React from 'react';
import { observer } from 'mobx-react-lite';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import { Box, SPACE } from '../../../../styles';
import { useRegStoreField } from '../../../../miscellaneous/hooks';
import { validDateStr } from '../../../../shared/dateCheck';
import { isChinese } from '../../../../shared/cnCheck';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';

export const Step1Inputs: React.FC<{ hideOpenButton?: boolean }> = observer(
  ({ hideOpenButton }) => {
    const [firstName, onFirstNameChange] = useRegStoreField<string>(
      'firstName',
    );
    const [lastName, onLastNameChange] = useRegStoreField<string>('lastName');
    const [birthday, onBirthdayChange] = useRegStoreField<string>('birthday');
    const [gender, onGenderChange] = useRegStoreField<string>('gender');

    return (
      <InputsBox label="基本信息" shouldOpen hideOpenButton={hideOpenButton}>
        <Input
          type="text"
          placeholder="请输入  姓"
          validate={isChinese}
          errorMessage="请正确输入你尊贵的姓氏（中文）"
          value={lastName}
          onChange={onLastNameChange}
        />
        <Input
          type="text"
          placeholder="请输入  名"
          validate={isChinese}
          errorMessage="请正确输入你的鼎鼎大名（中文）"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <Input
          type="text"
          placeholder="请输入  生日: 2000/08/18"
          validate={v => !validDateStr(v).error}
          errorMessage={v => validDateStr(v).errMsg}
          value={birthday}
          onChange={onBirthdayChange}
        />
        <RadioGroup
          name="gender"
          selectedValue={gender}
          onChange={onGenderChange}
          alignItems="center"
          mb={SPACE.xxSmall}
        >
          <RadioButton value="男" label="男" />
          <RadioButton value="女" label="女" />
        </RadioGroup>
      </InputsBox>
    );
  },
);
