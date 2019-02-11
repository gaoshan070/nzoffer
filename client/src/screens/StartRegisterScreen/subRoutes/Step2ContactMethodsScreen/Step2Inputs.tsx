import React from 'react';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import { useRegStoreField } from '../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { emailCheck } from '../../../../shared/emailCheck';
import { LocationDropDown } from './LocationDropdown/LocationDropDown';
import { nameCheck } from '../../../../shared/nameCheck';

export const Step2Inputs = observer(() => {
  const [streetNum, onStreetNumChange] = useRegStoreField('streetNum');
  const [streetName, onStreetNameChange] = useRegStoreField('streetName');
  const [email, onEmailChange] = useRegStoreField('email');

  return (
    <InputsBox label="联系方式" shouldOpen>
      <Input
        type="text"
        placeholder="街道号"
        validate={nameCheck.isNameValid}
        errorMessage="请填写街道号"
        value={streetNum}
        onChange={onStreetNumChange}
      />
      <Input
        type="text"
        placeholder="街道名"
        validate={nameCheck.isNameValid}
        errorMessage="请填写街道名"
        value={streetName}
        onChange={onStreetNameChange}
      />
      <LocationDropDown />
      <Input
        type="email"
        placeholder="请输入电子邮箱"
        validate={emailCheck.isEmailValid}
        errorMessage="请填写正确的电子邮箱"
        value={email}
        onChange={onEmailChange}
      />
    </InputsBox>
  );
});
