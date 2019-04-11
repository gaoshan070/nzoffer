import React from 'react';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Input } from '../../../../components/Input';
import { useRegStoreField } from '../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { isEmailValid } from '../../../../shared/emailCheck';
import { LocationDropDown } from './LocationDropdown/LocationDropDown';
import {
  isStreetNameValid,
  isStreetNumValid,
} from '../../../../shared/streetNameNumCheck';
import { IRegStepInputsBox } from '../Step1BasicInfoScreen/Step1Inputs';

export const Step2Inputs: React.FC<IRegStepInputsBox> = observer(
  ({ shouldOpen = true, hideOpenButton }) => {
    const [streetNum, onStreetNumChange] = useRegStoreField('streetNum');
    const [streetName, onStreetNameChange] = useRegStoreField('streetName');
    const [email, onEmailChange] = useRegStoreField('email');

    return (
      <InputsBox
        label="联系方式"
        shouldOpen={shouldOpen}
        hideOpenButton={hideOpenButton}
      >
        <Input
          type="text"
          placeholder="街道号"
          validate={isStreetNumValid}
          errorMessage="街道号 有点问题哦，请仔细检查"
          value={streetNum}
          onChange={onStreetNumChange}
        />
        <Input
          type="text"
          placeholder="街道名"
          validate={isStreetNameValid}
          errorMessage="街道名 有点问题哦，请仔细检查"
          value={streetName}
          onChange={onStreetNameChange}
        />
        <LocationDropDown />
        <Input
          type="email"
          placeholder="请输入电子邮箱"
          validate={isEmailValid}
          errorMessage="请填写正确的电子邮箱"
          value={email}
          onChange={onEmailChange}
        />
      </InputsBox>
    );
  },
);
