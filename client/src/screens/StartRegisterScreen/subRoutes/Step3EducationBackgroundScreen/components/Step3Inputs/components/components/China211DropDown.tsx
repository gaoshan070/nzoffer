import React, { useState, useContext } from 'react';
import { Box } from '../../../../../../../../styles';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  NO_ENG_SCORE_TEXT,
  uni211CitiesData,
  uni211Data,
} from '../../../../../../../../shared/sharedData';
import { StoreContext } from '../../../../../../../../store/store.context';
import { observer } from 'mobx-react-lite';
import {
  usePrevious,
  useRegStoreDropDown,
} from '../../../../../../../../miscellaneous/hooks';
import {
  getSharedDropDownStyleAll,
  sharedDropDownStyle,
  sharedDropDownStyleAll,
} from '../../../../../components/sharedDropDown';

export const China211DropDown: React.FC = observer(() => {
  const [uni211City, setUni211City] = useState('');
  const prevUni211City = usePrevious(uni211City);
  const { update } = useContext(StoreContext).regStore;
  const [cn211UniName, onCN211UniNameChange] = useRegStoreDropDown(
    'cn211UniName',
  );

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
        {...sharedDropDownStyleAll}
      />
    </Box>
  );
});
