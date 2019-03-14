import React from 'react';
import DropDown from '../../../../components/DropDown/DropDown';
import { INZStudyAreaDetail } from '../../../../store/AdminStore.type';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../styles';
import { programmeLevel } from '../../../../shared/sharedData';

export const ProgrammeLevelDropDown: React.FC<{
  toDisplay: string;
  whenSelectItem: (item: string) => void;
}> = observer(({ toDisplay, whenSelectItem }) => {
  return (
    <Box alignItems="center" gap={3}>
      课程等级:
      <DropDown<INZStudyAreaDetail>
        boxProps={{
          maxHeight: '36px',
          minHeight: '36px',
        }}
        css={{
          maxHeight: '36px',
        }}
        toDisplay={toDisplay}
        items={programmeLevel}
        getItemProps={(item: string) => ({
          key: item,
          itemText: item,
        })}
        whenSelectItem={whenSelectItem}
      />
    </Box>
  );
});
