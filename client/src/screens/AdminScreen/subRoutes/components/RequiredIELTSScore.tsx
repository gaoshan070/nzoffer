import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../components/DropDown/DropDown';
import {
  engTestScores,
  NO_ENG_SCORE_TEXT,
} from '../../../../shared/sharedData';
import { sharedDropDownStyleAll } from '../../../StartRegisterScreen/subRoutes/components/sharedDropDown';

export const RequiredIELTSScore: React.FC<{
  toDisplay: string;
  whenSelectItem: (v: string) => void;
  includeNoIELTS?: boolean;
}> = observer(({ includeNoIELTS, toDisplay, whenSelectItem }) => {
  return (
    <DropDown
      defaultText="请选择所需雅思成绩"
      toDisplay={toDisplay}
      items={
        includeNoIELTS
          ? engTestScores.IELTS.concat(NO_ENG_SCORE_TEXT)
          : engTestScores.IELTS
      }
      // @ts-ignore
      whenSelectItem={whenSelectItem}
      {...sharedDropDownStyleAll}
    />
  );
});
