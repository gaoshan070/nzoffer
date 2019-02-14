import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { chinaDegrees } from '../../../../../../../../shared/sharedData';
import { StoreContext } from '../../../../../../../../store/store.context';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { sharedDropDownStyle } from '../../../../../components/sharedDropDown';

export const ChinaDegreeDropDown: React.FC = observer(() => {
  const { update, chinaDegree } = useContext(StoreContext).regStore;

  return (
    <DropDown
      defaultText="请选择你当前的学历"
      toDisplay={chinaDegree}
      items={chinaDegrees}
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
  );
});
