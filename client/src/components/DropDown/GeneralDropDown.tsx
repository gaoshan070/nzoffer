import React, { useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../screens/ChatScreen/utils';
import DropDown from './DropDown';
import { AppStore } from '../../store/ChatScreenStore/ChatScreenStore';

export function getSetTextFunc(
  obj: AppStore,
  key: keyof AppStore,
) {
  return (value: unknown) => {
    // @ts-ignore
    obj[key] = value;
  };
}

interface IGeneralDropDown<T> extends IBaseStepType {
  text: string;
  items: T[];
  setText: Function;
  notScrollInToView?: boolean;
}

function GeneralDropDown<T>({
  text,
  setText,
  items,
  callback,
  notScrollInToView,
}: IGeneralDropDown<T>) {
  const [isCalled, setIsCalled] = useState(false);

  const whenSelectItem = (item: T) => {
    setText(item || '');
    if (!isCalled) {
      callback();
      setIsCalled(true);
    }
  };

  return (
    <DropDown<T>
      toDisplay={text}
      items={items}
      whenSelectItem={whenSelectItem}
      notScrollInToView={notScrollInToView}
    />
  );
}

export default observer(GeneralDropDown);
