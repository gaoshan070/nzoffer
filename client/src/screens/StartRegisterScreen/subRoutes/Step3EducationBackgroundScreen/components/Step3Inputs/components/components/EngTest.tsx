import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  useRegStoreDropDown,
  usePrevious,
} from '../../../../../../../../miscellaneous/hooks';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  engTestNames,
  engTestScores,
  NO_ENG_SCORE_TEXT,
} from '../../../../../../../../shared/sharedData';
import { Box } from '../../../../../../../../styles';
import {
  getSharedDropDownStyleAll,
  sharedDropDownStyleAll,
} from '../../../../../components/sharedDropDown';

type KeyOfTestScore = keyof typeof engTestScores;

export const EngTest: React.FC<{ isOpenToTop?: boolean }> = observer(
  ({ isOpenToTop }) => {
    const [engTestName, onEngTestNameChange] = useRegStoreDropDown<string>(
      'engTestName',
    );
    const prevEngTestName = usePrevious(engTestName);
    const [engTestScore, onEngTestScoreChange] = useRegStoreDropDown<string>(
      'engTestScore',
    );

    return (
      <Box>
        <DropDown
          isOpenToTop={isOpenToTop}
          defaultText="英文测试名"
          toDisplay={engTestName}
          items={engTestNames}
          whenSelectItem={(item: string) => {
            onEngTestNameChange(item);
            if (item !== prevEngTestName) {
              onEngTestScoreChange('');
            }
          }}
          {...getSharedDropDownStyleAll({
            css: {
              borderRight:
                engTestName === NO_ENG_SCORE_TEXT ? 'default' : 'none',
            },
            itemStyle: {
              paddingLeft: '19px',
            },
          })}
        />
        {engTestName !== NO_ENG_SCORE_TEXT && (
          <DropDown
            isOpenToTop={isOpenToTop}
            defaultText="测试成绩"
            toDisplay={engTestScore}
            items={engTestScores[engTestName as KeyOfTestScore]}
            whenSelectItem={onEngTestScoreChange}
            {...getSharedDropDownStyleAll({
              itemStyle: {
                paddingLeft: '19px',
              },
            })}
          />
        )}
      </Box>
    );
  },
);
