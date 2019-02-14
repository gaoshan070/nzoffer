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
} from '../../../../../../../../shared/sharedData';
import { Box } from '../../../../../../../../styles';
import { sharedDropDownStyle } from '../../../../../components/sharedDropDown';

type KeyOfTestScore = keyof typeof engTestScores;

export const EngTest: React.FC = observer(() => {
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
        defaultText="请选择英文测试名"
        toDisplay={engTestName}
        items={engTestNames}
        whenSelectItem={(item: string) => {
          onEngTestNameChange(item);
          if (item !== prevEngTestName) {
            onEngTestScoreChange('');
          }
        }}
        boxProps={sharedDropDownStyle}
      />
      <DropDown
        defaultText="请选择测试成绩"
        toDisplay={engTestScore}
        items={engTestScores[engTestName as KeyOfTestScore]}
        whenSelectItem={onEngTestScoreChange}
        boxProps={sharedDropDownStyle}
      />
    </Box>
  );
});
