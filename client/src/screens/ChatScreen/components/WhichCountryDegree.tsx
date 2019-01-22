import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';
import DropDown from '../../../components/DropDown/DropDown';
import { getWhenSelectItem } from '../../../components/DropDown/DropDown.utils';

const countryData = [
  '英国',
  '澳洲',
  '美国',
  '加拿大',
  '新西兰',
  '新加坡',
  '欧洲',
  '国家',
  '亚洲国家',
];

const WhichCountryDegree: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(ChatScreenStoreContext);

  return (
    <DropDown
      toDisplay={store.whichCountryDegree}
      items={countryData}
      whenSelectItem={getWhenSelectItem(
        store,
        'whichCountryDegree',
        callback,
      )}
    />
  );
};

export default observer(WhichCountryDegree);
