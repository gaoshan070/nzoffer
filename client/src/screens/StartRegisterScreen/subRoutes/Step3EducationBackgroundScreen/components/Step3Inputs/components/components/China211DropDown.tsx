import React, { useState, useContext, useEffect } from 'react';
import { Box } from '../../../../../../../../styles';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  uni211CitiesData,
  uni211Data,
} from '../../../../../../../../shared/sharedData';
import { StoreContext } from '../../../../../../../../store/store.context';
import { observer } from 'mobx-react-lite';
import {
  usePrevious,
  useRegStoreDropDown,
} from '../../../../../../../../miscellaneous/hooks';
import { getSharedDropDownStyleAll } from '../../../../../components/sharedDropDown';

export const China211DropDown: React.FC = observer(() => {
  const [uni211City, setUni211City] = useState('');
  const prevUni211City = usePrevious(uni211City);
  const { update } = useContext(StoreContext).regStore;
  const [cn211UniName, onCN211UniNameChange] = useRegStoreDropDown(
    'cn211UniName',
  );

  useEffect(() => {
    // After getting uniName from server
    // since we don't save the province info
    // we need to look it up locally
    // to prevent an empty cityName in the DropDown
    if (cn211UniName && !uni211City) {
      let cityName = '';
      Object.entries(uni211Data).some(pair => {
        if (pair[1].includes(cn211UniName)) {
          cityName = pair[0];
          return true;
        }
        return false;
      });
      if (cityName) {
        setUni211City(cityName);
      }
    }
  }, [cn211UniName, uni211City]);

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
        {...getSharedDropDownStyleAll({
          css: {
            borderRight: 'none',
          },
          listStyle: {
            height: '20vh',
          },
          itemStyle: {
            paddingLeft: '19px',
          },
        })}
      />
      <DropDown<string>
        defaultText="请选择 大学"
        toDisplay={cn211UniName}
        items={uni211Data[uni211City as keyof typeof uni211Data]}
        whenSelectItem={onCN211UniNameChange}
        {...getSharedDropDownStyleAll({
          listStyle: {
            maxHeight: '20vh',
          },
        })}
      />
    </Box>
  );
});
