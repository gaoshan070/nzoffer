import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { sharedData } from '../../../../../../../../shared/sharedData';
import { useRegStoreDropDown } from '../../../../../../../../miscellaneous/hooks';
import { sharedDropDownStyle } from '../../../../../components/sharedDropDown';

export const CNUniAverageScore: React.FC = observer(() => {
  const [cnUniAverageScore, onScoreChange] = useRegStoreDropDown(
    'cnUniAverageScore',
  );

  return (
    <DropDown
      defaultText="请选择你的大学平均成绩"
      toDisplay={cnUniAverageScore}
      items={sharedData.cnUniAverageScore}
      whenSelectItem={onScoreChange}
      boxProps={{
        ...sharedDropDownStyle,
        width: '100%',
      }}
      itemStyle={{
        paddingLeft: '4rem',
      }}
    />
  );
});
