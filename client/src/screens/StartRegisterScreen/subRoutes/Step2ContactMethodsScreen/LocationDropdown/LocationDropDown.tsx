import React from 'react';
import { Box } from '../../../../../styles';
import { ProvinceDropDown } from './ProvinceDropDown';
import { CitiesDropDown } from './CitiesDropDown';
import { observer } from 'mobx-react-lite';

export const LocationDropDown: React.FC = observer(() => {
  return (
    <Box>
      <ProvinceDropDown />
      <CitiesDropDown />
    </Box>
  );
});
