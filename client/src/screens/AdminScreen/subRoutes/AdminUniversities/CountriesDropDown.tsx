import React from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../components/DropDown/DropDown';
import { overseaCountries } from '../../../../shared/sharedData';

export const CountriesDropDown: React.FC<{
  selectedCountry: string;
  whenSelected: (item: string) => void;
}> = observer(({ selectedCountry, whenSelected }) => {
  return (
    <DropDown
      toDisplay={selectedCountry}
      items={overseaCountries}
      whenSelectItem={whenSelected}
    />
  );
});
