import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../screens/ChatScreen/utils';
import DropDown from './DropDown';
import Box from '../Box/Box';

interface IGeneralDropDown<T> extends IBaseStepType {
  text: string;
  items: T[];
  setText: Function;
}

function GeneralDropDown<T>({
  text,
  setText,
  items,
  callback,
}: IGeneralDropDown<T>) {
  const [isCalled, setIsCalled] = useState(false);

  const whenSelectItem = (
    eventTarget: HTMLElement,
  ) => {
    setText(eventTarget.textContent || '');
    if (!isCalled) {
      callback();
      setIsCalled(true);
    }
  };

  return (
    <Box>
      <DropDown<T>
        toDisplay={text}
        items={items}
        whenSelectItem={whenSelectItem}
      />
    </Box>
  );
}

export default observer(GeneralDropDown);
