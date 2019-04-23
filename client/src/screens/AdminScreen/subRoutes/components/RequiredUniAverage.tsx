import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../components/DropDown/DropDown';
import { cnUniAverageScores } from '../../../../shared/sharedData';
import { sharedDropDownStyleAll } from '../../../StartRegisterScreen/subRoutes/components/sharedDropDown';
import { Box, Text } from '../../../../styles';

export const RequiredUniAverage: React.FC<{
  toDisplay: string;
  whenSelectItem: (v: string) => void;
}> = observer(({ toDisplay, whenSelectItem }) => {
  return (
    <Box alignItems="center">
      <Text>所需大学平均成绩</Text>
      <DropDown
        defaultText="请选择所需大学平均成绩"
        toDisplay={toDisplay}
        items={cnUniAverageScores}
        whenSelectItem={whenSelectItem}
        {...sharedDropDownStyleAll}
      />
    </Box>
  );
});
