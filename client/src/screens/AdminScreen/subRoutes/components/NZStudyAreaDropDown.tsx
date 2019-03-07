import React, { useState } from 'react';
import DropDown from '../../../../components/DropDown/DropDown';
import { useAdminStore } from '../../../../store/store.context';
import { INZStudyArea } from '../../../../store/AdminStore.type';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../styles';

export const NZStudyAreaDropDown: React.FC<{
  selected?: string;
  whenSelectItem?: (item: INZStudyArea) => void;
}> = observer(({ selected, whenSelectItem }) => {
  const [selectedStudyArea, setSelectedStudyArea] = useState(selected);
  const { nzStudyAreas, fetchNZStudyAreas } = useAdminStore();

  useComponentDidMount(async () => {
    if (!nzStudyAreas.length) {
      await fetchNZStudyAreas();
    }
  });

  return (
    <Box alignItems="center" gap={3}>
      学习领域:
      <DropDown<INZStudyArea>
        boxProps={{
          maxHeight: '36px',
          minHeight: '36px',
        }}
        css={{
          maxHeight: '36px',
        }}
        toDisplay={selectedStudyArea}
        items={nzStudyAreas}
        getItemProps={(item: INZStudyArea) => ({
          key: item._id,
          itemText: item.nameCN,
        })}
        whenSelectItem={(item: INZStudyArea) => {
          setSelectedStudyArea(item.nameCN);
          if (typeof whenSelectItem === 'function') {
            whenSelectItem(item);
          }
        }}
      />
    </Box>
  );
});
