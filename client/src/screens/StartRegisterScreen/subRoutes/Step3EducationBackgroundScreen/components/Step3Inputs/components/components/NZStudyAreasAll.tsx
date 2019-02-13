import React from 'react';
import { sharedData } from '../../../../../../../../shared/sharedData';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { useRegStoreDropDown } from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box } from '../../../../../../../../styles';
import { sharedDropDownStyle } from '../../../../../components/sharedDropDown';

export const NZStudyAreasAll: React.FC = observer(() => {
  const [nzStudyArea, onNzStudyAreaChange] = useRegStoreDropDown<string>(
    'nzStudyArea',
  );
  const [nzStudyAreaDetail, onNzStudyAreaDetailChange] = useRegStoreDropDown<
    string
  >('nzStudyAreaDetail');

  return (
    <Box>
      <DropDown
        defaultText="请选留学意向专业"
        toDisplay={nzStudyArea}
        items={sharedData.nzStudyAreas}
        whenSelectItem={onNzStudyAreaChange}
        boxProps={sharedDropDownStyle}
      />
      <DropDown
        defaultText="请选细分专业"
        toDisplay={nzStudyAreaDetail}
        items={['细分专业']}
        whenSelectItem={onNzStudyAreaDetailChange}
        boxProps={sharedDropDownStyle}
      />
    </Box>
  );
});
