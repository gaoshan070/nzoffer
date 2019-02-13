import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../../../../../../../store/store.context';
import { IsCN211Uni } from './IsCN211Uni';
import { China211DropDown } from './China211DropDown';
import { Input } from '../../../../../../../../components/Input';
import { useRegStoreField } from '../../../../../../../../miscellaneous/hooks';
import { CaseWrapper } from './CaseWrapper';

export const Uni211YesNoAndName: React.FC = observer(() => {
  const { isCN211Uni } = useContext(StoreContext).regStore;
  const [cnNormalUniName, onCnNormalUniNameChange] = useRegStoreField<string>(
    'cnNormalUniName',
  );

  return (
    <CaseWrapper>
      <IsCN211Uni />
      {isCN211Uni ? (
        <China211DropDown />
      ) : (
        <Input
          type="text"
          placeholder="请输入你所就读的大学名称"
          value={cnNormalUniName}
          onChange={onCnNormalUniNameChange}
        />
      )}
    </CaseWrapper>
  );
});
