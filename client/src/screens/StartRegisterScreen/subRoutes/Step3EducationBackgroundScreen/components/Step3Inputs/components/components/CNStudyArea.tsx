import React from 'react';
import { Input } from '../../../../../../../../components/Input';
import { useRegStoreField } from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';

export const CNStudyArea: React.FC = observer(() => {
  const [cnStudyArea, onCnStudyAreaChange] = useRegStoreField<string>(
    'cnStudyArea',
  );

  return (
    <Input
      type="text"
      placeholder="请输入你国内大学所学专业"
      value={cnStudyArea}
      onChange={onCnStudyAreaChange}
    />
  );
});
