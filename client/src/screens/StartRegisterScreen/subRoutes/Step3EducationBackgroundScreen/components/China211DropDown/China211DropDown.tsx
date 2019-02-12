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
  const { uni211Name, update } = useContext(StoreContext).regStore;

  return (
    <Box>
      <DropDown
        toDisplay={uni211City}
        items={uni211CitiesData}
        whenSelectItem={(item: string) => {
          setUni211City(item);
          if (item !== prevUni211City) {
            update('uni211Name', '');
          }
        }}
        boxProps={sharedDropDownStyle}
      />
      <DropDown
        toDisplay={uni211Name}
        // @ts-ignore
        items={uni211Data[uni211City] || ['']}
        whenSelectItem={(item: string) => {
          update('uni211Name', item);
        }}
        boxProps={sharedDropDownStyle}
      />
    </Box>
  );
});
