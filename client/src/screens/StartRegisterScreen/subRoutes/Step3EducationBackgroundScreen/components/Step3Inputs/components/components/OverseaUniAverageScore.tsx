import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { cnUniAverageScores } from '../../../../../../../../shared/sharedData';
import { useRegStoreDropDown } from '../../../../../../../../miscellaneous/hooks';
import { sharedDropDownStyleAll } from '../../../../../components/sharedDropDown';

export const OverseaUniAverageScore: React.FC = observer(() => {
  const [overseaUniAverageScore, onScoreChange] = useRegStoreDropDown(
    'overseaUniAverageScore',
  );

  return (
    <DropDown
      defaultText="请选择你的大学平均成绩"
      toDisplay={overseaUniAverageScore}
      items={cnUniAverageScores}
      whenSelectItem={onScoreChange}
      {...sharedDropDownStyleAll}
    />
  );
});
