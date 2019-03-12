import React, { useState } from 'react';
import DropDown from '../../../../components/DropDown/DropDown';
import { useAdminStore } from '../../../../store/store.context';
import {
  INZStudyArea,
  INZStudyAreaDetail,
  IUniversity,
} from '../../../../store/AdminStore.type';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../styles';

export const UniversityDropDown: React.FC<{
  selected?: string;
  whenSelectItem?: (item: IUniversity) => void;
}> = observer(({ selected, whenSelectItem }) => {
  const [selectedUni, setSelectedUni] = useState(selected);
  const { universities, fetchUniversities } = useAdminStore();

  useComponentDidMount(async () => {
    if (!universities.length) {
      await fetchUniversities();
    }
  });

  return (
    <Box alignItems="center" gap={3}>
      大学:
      <DropDown
        boxProps={{
          maxHeight: '36px',
          minHeight: '36px',
        }}
        css={{
          maxHeight: '36px',
        }}
        toDisplay={selectedUni}
        items={universities}
        getItemProps={(item: IUniversity) => ({
          key: item._id,
          itemText: item.nameCN,
        })}
        whenSelectItem={(item: IUniversity) => {
          setSelectedUni(item.nameCN);
          if (typeof whenSelectItem === 'function') {
            whenSelectItem(item);
          }
        }}
      />
    </Box>
  );
});

export const useUniversitiesDropDown = (
  isEdit: boolean | null,
  uniIdWhenEdit: IUniversity['_id'],
) => {
  const { universities } = useAdminStore();

  let defaultValue: IUniversity = {
    _id: '',
    nameCN: '',
    nameEN: '',
    logoURL: '',
    createdAt: '',
    country: '',
    updatedAt: '',
  };
  if (isEdit) {
    defaultValue =
      universities.find(v => v._id === uniIdWhenEdit) || defaultValue;
  }

  return useState<IUniversity>(defaultValue);
};
