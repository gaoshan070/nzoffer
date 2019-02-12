import React, { useState, useContext } from 'react';
import { Box } from '../../../../../../styles';
import DropDown from '../../../../../../components/DropDown/DropDown';
import { uni211CitiesData, uni211Data } from './Uni211list';
import { StoreContext } from '../../../../../../store/store.context';
import { observer } from 'mobx-react-lite';
import { usePrevious } from '../../../../../../miscellaneous/hooks';
import { sharedDropDownStyle } from '../../../components/sharedDropDown';

export const China211DropDown: React.FC = observer(() => {
  const [uni211City, setUni211City] = useState('');
  const prevUni211City = usePrevious(uni211City);
  const { cn211UniName, update } = useContext(StoreContext).regStore;

  return (
    <Box>
      <DropDown
        defaultText="请选择 省"
        toDisplay={uni211City}
        items={uni211CitiesData}
        whenSelectItem={(item: string) => {
          setUni211City(item);
          if (item !== prevUni211City) {
            update('cn211UniName', '');
          }
        }}
        boxProps={sharedDropDownStyle}
      />
      <DropDown
        defaultText="请选择 大学"
        toDisplay={cn211UniName}
        // @ts-ignore
        items={uni211Data[uni211City] || ['']}
        whenSelectItem={(item: string) => {
          update('cn211UniName', item);
        }}
        boxProps={sharedDropDownStyle}
      />
    </Box>
  );
});
