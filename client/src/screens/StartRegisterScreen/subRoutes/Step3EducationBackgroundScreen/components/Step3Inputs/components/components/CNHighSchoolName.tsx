import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRegStoreField } from '../../../../../../../../miscellaneous/hooks';
import { Input } from '../../../../../../../../components/Input';
import { isValidLengthString } from '../../../../../../../../shared/stringCheck';

export const CNHighSchoolName: React.FC = observer(() => {
  const [cnHighSchoolName, onCnHighSchoolNameChange] = useRegStoreField<string>(
    'cnHighSchoolName',
  );

  return (
    <Input
      type="text"
      placeholder="请输入你的中学学校名称"
      validate={isValidLengthString(4)}
      value={cnHighSchoolName}
      onChange={onCnHighSchoolNameChange}
    />
  );
});
