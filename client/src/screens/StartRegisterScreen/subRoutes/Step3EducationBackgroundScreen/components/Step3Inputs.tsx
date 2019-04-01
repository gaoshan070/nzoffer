import React, { useContext } from 'react';
import { InputsBox } from '../../../../PortalScreen/components/InputsBox';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../../../../store/store.context';
import { getCaseNum } from '../../../../../shared/regStep3UIState';
import { Step3Case1Input } from './Step3Inputs/components/Step3Case1Inputs';
import { Step3Case2Input } from './Step3Inputs/components/Step3Case2Inputs';
import { Step3Case3Input } from './Step3Inputs/components/Step3Case3Inputs';
import { Step3Case4Input } from './Step3Inputs/components/Step3Case4Inputs';
import { Step3Case5Input } from './Step3Inputs/components/Step3Case5Inputs';
import { Step3Case6Input } from './Step3Inputs/components/Step3Case6Inputs';
import { ChinaDegreeDropDown } from './Step3Inputs/components/components/ChinaDegreeDropDown';
import { EngTest } from './Step3Inputs/components/components/EngTest';

const CasesMatch = {
  1: Step3Case1Input,
  2: Step3Case2Input,
  3: Step3Case3Input,
  4: Step3Case4Input,
  5: Step3Case5Input,
  6: Step3Case6Input,
};

export const Step3Inputs: React.FC<{ hideOpenButton?: boolean }> = observer(
  ({ hideOpenButton }) => {
    const { isDegreeGetInChina, chinaDegree } = useContext(
      StoreContext,
    ).regStore;

    const stepNum = getCaseNum(isDegreeGetInChina, chinaDegree);

    const Case = stepNum ? CasesMatch[stepNum] : ChinaDegreeDropDown;

    return (
      <InputsBox label="学历状况" shouldOpen hideOpenButton={hideOpenButton}>
        <Case />
      </InputsBox>
    );
  },
);
