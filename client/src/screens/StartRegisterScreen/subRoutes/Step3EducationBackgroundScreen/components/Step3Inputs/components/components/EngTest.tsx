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
  expectedEngTestScores,
} from '../../../../../../../../shared/sharedData';
import { isNoEngTestScore } from '../../../../../../../../shared/regStep3UIState';
import { Box, Text, SPACE } from '../../../../../../../../styles';
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
  const [
    expectedEngTestName,
    onExpectedEngTestNameChange,
  ] = useRegStoreDropDown<string>('expectedEngTestName');
  const [
    expectedEngTestScore,
    onExpectedEngTestScoreChange,
  ] = useRegStoreDropDown<string>('expectedEngTestScore');

  return (
    <Box direction="column" gap={SPACE.xSmall}>
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
      {isNoEngTestScore(engTestScore) && (
        <Box direction="column">
          <Text pb={SPACE.xxxxSmall}>请预估你的英文成绩</Text>
          <Box>
            <DropDown
              defaultText="请选择英文测试名"
              toDisplay={expectedEngTestName}
              items={engTestNames}
              whenSelectItem={(item: string) => {
                onExpectedEngTestNameChange(item);
                if (item !== prevEngTestName) {
                  onExpectedEngTestScoreChange('');
                }
              }}
              boxProps={sharedDropDownStyle}
            />
            <DropDown
              defaultText="请预估测试成绩"
              toDisplay={expectedEngTestScore}
              items={expectedEngTestScores[engTestName as KeyOfTestScore]}
              whenSelectItem={onExpectedEngTestScoreChange}
              boxProps={sharedDropDownStyle}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
});
