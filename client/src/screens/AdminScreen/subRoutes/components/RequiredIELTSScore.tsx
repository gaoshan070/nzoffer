import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../components/DropDown/DropDown';
import { engTestScores } from '../../../../shared/sharedData';
import { sharedDropDownStyle } from '../../../StartRegisterScreen/subRoutes/components/sharedDropDown';

export const RequiredIELTSScore: React.FC<{
  toDisplay: string;
  whenSelectItem: (v: string) => void;
}> = observer(({ toDisplay, whenSelectItem }) => {
  return (
    <DropDown
      defaultText="请选择所需雅思成绩"
      toDisplay={toDisplay}
      items={engTestScores.IELTS}
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
