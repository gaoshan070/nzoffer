import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { cnUniAverageScores } from '../../../../../../../../shared/sharedData';
import { useRegStoreDropDown } from '../../../../../../../../miscellaneous/hooks';
import { getSharedDropDownStyleAll } from '../../../../../components/sharedDropDown';
import { Box } from '../../../../../../../../styles/rebase/components';

export const CNUniAverageScore: React.FC = observer(() => {
  const [cnUniAverageScore, onScoreChange] = useRegStoreDropDown(
    'cnUniAverageScore',
  );

  return (
    <Box>
      <DropDown
        isOpenToTop
        defaultText="大学平均成绩"
        toDisplay={cnUniAverageScore}
        items={cnUniAverageScores}
        whenSelectItem={onScoreChange}
        {...getSharedDropDownStyleAll({
          listStyle: {
            height: '25vh',
          },
        })}
      />
    </Box>
  );
});
