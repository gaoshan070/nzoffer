import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { chinaDegreesMap } from '../../../../../../../../shared/sharedData';
import { StoreContext } from '../../../../../../../../store/store.context';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { sharedDropDownStyle } from '../../../../../components/sharedDropDown';
import { Box } from '../../../../../../../../styles';

export const ChinaDegreeDropDown: React.FC = observer(() => {
  const [degreeCategory, setDegreeCategory] = useState<
    keyof typeof chinaDegreesMap
  >('大学');
  const { update, chinaDegree } = useContext(StoreContext).regStore;

  return (
    <Box>
      <DropDown
        defaultText="请选择你当前的学历"
        toDisplay={degreeCategory}
        items={Object.keys(chinaDegreesMap)}
        whenSelectItem={(item: keyof typeof chinaDegreesMap) => {
          setDegreeCategory(item);
          if (!chinaDegreesMap[item].includes(chinaDegree)) {
            update('chinaDegree', '');
          }
        }}
        boxProps={{
          ...sharedDropDownStyle,
          width: '100%',
        }}
        itemStyle={{
          paddingLeft: '4.4rem',
        }}
      />
      <DropDown
        defaultText="请选择学历细分"
        toDisplay={chinaDegree}
        items={chinaDegreesMap[degreeCategory]}
        whenSelectItem={(item: string) => {
          update('chinaDegree', item);
        }}
        boxProps={{
          ...sharedDropDownStyle,
          width: '100%',
        }}
        itemStyle={{
          paddingLeft: '4.4rem',
        }}
      />
    </Box>
  );
});
