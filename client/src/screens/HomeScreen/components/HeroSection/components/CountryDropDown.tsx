import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../components/DropDown/DropDown';

const overseaCountries = [
  '新西兰',
  '英国',
  '澳洲',
  '美国',
  '加拿大',
  '新加坡',
  '欧洲国家',
  '亚洲国家',
];

export const CountryDropDown: React.FC = observer(() => {
  const [selected, setSelected] = useState(overseaCountries[0]);

  return (
    <DropDown
      boxProps={{
        width: '100px',
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
