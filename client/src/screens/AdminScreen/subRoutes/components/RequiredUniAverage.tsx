import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../components/DropDown/DropDown';
import { cnUniAverageScores } from '../../../../shared/sharedData';
import { useRegStoreDropDown } from '../../../../miscellaneous/hooks';
import { sharedDropDownStyle } from '../../../StartRegisterScreen/subRoutes/components/sharedDropDown';

export const RequiredUniAverage: React.FC<{
  toDisplay: string;
  whenSelectItem: (v: string) => void;
}> = observer(({ toDisplay, whenSelectItem }) => {
  return (
    <DropDown
      defaultText="请选择最低大学平均成绩"
      toDisplay={toDisplay}
      items={cnUniAverageScores}
      whenSelectItem={whenSelectItem}
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
