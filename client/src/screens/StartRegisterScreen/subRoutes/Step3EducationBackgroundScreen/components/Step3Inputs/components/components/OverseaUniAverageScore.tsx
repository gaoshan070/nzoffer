import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { cnUniAverageScores } from '../../../../../../../../shared/sharedData';
import { useRegStoreDropDown } from '../../../../../../../../miscellaneous/hooks';
import { getSharedDropDownStyleAll } from '../../../../../components/sharedDropDown';

export const OverseaUniAverageScore: React.FC = observer(() => {
  const [overseaUniAverageScore, onScoreChange] = useRegStoreDropDown(
    'overseaUniAverageScore',
  );

  return (
    <DropDown
      isOpenToTop
      defaultText="你的大学平均成绩"
      toDisplay={overseaUniAverageScore}
      items={cnUniAverageScores}
      whenSelectItem={onScoreChange}
      {...getSharedDropDownStyleAll({
        listStyle: {
          height: '25vh',
        },
      })}
    />
  );
});
