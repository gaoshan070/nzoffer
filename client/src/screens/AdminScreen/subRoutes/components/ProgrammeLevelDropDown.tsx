import React, { useState } from 'react';
import DropDown from '../../../../components/DropDown/DropDown';
import { INZStudyAreaDetail } from '../../../../store/AdminStore.type';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../styles';
import { programmeLevel } from '../../../../shared/sharedData';

export const ProgrammeLevelDropDown: React.FC<{
  selected?: string;
  whenSelectItem?: (item: string) => void;
}> = observer(({ selected, whenSelectItem }) => {
  const [selectedProgrammeLevel, setSelectedProgrammeLevel] = useState(
    selected,
  );

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
        toDisplay={selectedProgrammeLevel}
        items={programmeLevel}
        getItemProps={(item: string) => ({
          key: item,
          itemText: item,
        })}
        whenSelectItem={(item: string) => {
          setSelectedProgrammeLevel(item);
          if (typeof whenSelectItem === 'function') {
            whenSelectItem(item);
          }
        }}
      />
    </Box>
  );
});
