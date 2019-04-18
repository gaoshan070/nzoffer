import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../components/DropDown/DropDown';
import { overseaCountries } from '../../../../../shared/sharedData';

export const CountryDropDown: React.FC = observer(() => {
  const [selected, setSelected] = useState(overseaCountries[0]);

  return (
    <DropDown
      boxProps={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 99,
      }}
      css={{
        border: 'none',
        backgroundColor: 'transparent',
      }}
      toDisplay={selected}
      items={overseaCountries}
      whenSelectItem={setSelected}
    />
  );
});
