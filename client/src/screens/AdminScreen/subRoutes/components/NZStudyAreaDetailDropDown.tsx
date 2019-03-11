import React, { useState } from 'react';
import DropDown from '../../../../components/DropDown/DropDown';
import { useAdminStore } from '../../../../store/store.context';
import { INZStudyAreaDetail } from '../../../../store/AdminStore.type';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../styles';

export const NZStudyAreaDetailDropDown: React.FC<{
  selected?: string;
  whenSelectItem?: (item: INZStudyAreaDetail) => void;
}> = observer(({ selected, whenSelectItem }) => {
  const [selectedStudyArea, setSelectedStudyArea] = useState(selected);
  const { nzStudyAreas, fetchNZStudyAreaDetails } = useAdminStore();

  useComponentDidMount(async () => {
    if (!nzStudyAreas.length) {
      await fetchNZStudyAreaDetails();
    }
  });

  return (
    <Box alignItems="center" gap={3}>
      NZ学习领域细分:
      <DropDown<INZStudyAreaDetail>
        boxProps={{
          maxHeight: '36px',
          minHeight: '36px',
        }}
        css={{
          maxHeight: '36px',
        }}
        toDisplay={selectedStudyArea}
        items={nzStudyAreas}
        getItemProps={(item: INZStudyAreaDetail) => ({
          key: item._id,
          itemText: item.nameCN,
        })}
        whenSelectItem={(item: INZStudyAreaDetail) => {
          setSelectedStudyArea(item.nameCN);
          if (typeof whenSelectItem === 'function') {
            whenSelectItem(item);
          }
        }}
      />
    </Box>
  );
});
