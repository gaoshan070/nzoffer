import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import GeneralDropDown, {
  getSetTextFunc,
} from '../../../components/DropDown/GeneralDropDown';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

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
    <GeneralDropDown
      text={store.whichCountryDegree}
      items={countryData}
      setText={getSetTextFunc(
        store,
        'whichCountryDegree',
      )}
      callback={callback}
    />
  );
};

export default observer(WhichCountryDegree);
