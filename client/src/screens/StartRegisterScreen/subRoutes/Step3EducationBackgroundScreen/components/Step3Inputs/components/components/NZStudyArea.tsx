import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../../../../../styles';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { nzStudyAreas } from '../../../../../../../../shared/sharedData';
import { StoreContext } from '../../../../../../../../store/store.context';
import {
  sharedDropDownStyle,
  sharedDropDownStyleAll,
} from '../../../../../components/sharedDropDown';

export const NZStudyArea: React.FC = observer(() => {
  const { nzStudyArea, nzStudyAreaDetail, update } = useContext(
    StoreContext,
  ).regStore;

  return (
    <Box>
      <DropDown
        toDisplay={nzStudyArea}
        items={nzStudyAreas}
        whenSelectItem={(item: string) => {
          update('nzStudyArea', item);
        }}
        {...sharedDropDownStyleAll}
      />
      <DropDown
        toDisplay={nzStudyAreaDetail}
        items={['']}
        whenSelectItem={(item: string) => {
          update('nzStudyAreaDetail', item);
        }}
        {...sharedDropDownStyleAll}
      />
    </Box>
  );
});
