import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { chinaDegreesMap } from '../../../../../../../../shared/sharedData';
import { StoreContext } from '../../../../../../../../store/store.context';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { sharedDropDownStyleAll } from '../../../../../components/sharedDropDown';
import { Box } from '../../../../../../../../styles';
import {
  usePrevious,
  useRegStoreDropDown,
} from '../../../../../../../../miscellaneous/hooks';

export const ChinaDegreeDropDown: React.FC = observer(() => {
  const [degreeCategory, onDegreeCategoryChange] = useRegStoreDropDown<string>(
    'degreeCategory',
  );
  const prevDegreeCategory = usePrevious(degreeCategory);
  const { update } = useContext(StoreContext).regStore;

  const [chinaDegree, onChinaDegreeChange] = useRegStoreDropDown<string>(
    'chinaDegree',
  );

  return (
    <Box>
      <DropDown
        defaultText="请选择当前学历"
        toDisplay={degreeCategory}
        items={Object.keys(chinaDegreesMap)}
        whenSelectItem={(item: keyof typeof chinaDegreesMap) => {
          console.log(`select item:${item}`);
          onDegreeCategoryChange(item);
          if (item !== prevDegreeCategory) {
            update('chinaDegree', '');
          }
        }}
        {...sharedDropDownStyleAll}
      />
      <DropDown
        defaultText="请选择学历细分"
        toDisplay={chinaDegree}
        // @ts-ignore
        items={chinaDegreesMap[degreeCategory]}
        whenSelectItem={(item: string) => {
          onChinaDegreeChange(item);
          console.log(`degreeCategory after select:${degreeCategory}`);
        }}
        {...sharedDropDownStyleAll}
      />
    </Box>
  );
});
