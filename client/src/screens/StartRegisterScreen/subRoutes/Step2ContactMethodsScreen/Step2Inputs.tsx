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
        label="你的联系方式是"
        shouldOpen={shouldOpen}
        hideOpenButton={hideOpenButton}
      >
        <LocationDropDown />
        <Input
          type="text"
          placeholder="区"
          validate={isStreetNameValid}
          errorMessage="区 有点问题，请仔细检查"
          value={streetName}
          onChange={onStreetNameChange}
        />
        <Input
          type="text"
          placeholder="住址"
          validate={isStreetNumValid}
          errorMessage="住址 有点问题，请仔细检查"
          value={streetNum}
          onChange={onStreetNumChange}
        />
        <Input
          type="email"
          placeholder="电子邮箱"
          validate={isEmailValid}
          errorMessage="请填写正确的电子邮箱"
          value={email}
          onChange={onEmailChange}
        />
      </InputsBox>
    );
  },
);
