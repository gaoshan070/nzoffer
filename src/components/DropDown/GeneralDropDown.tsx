import React from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../screens/ChatScreen/utils';
import DropDown from './DropDown';
import Box from '../Box/Box';

interface IGeneralDropDown<T> extends IBaseStepType {
  text: string;
  items: Array<T>;
  setText: Function;
}

function GeneralDropDown<T>({
  text,
  setText,
  items,
  callback,
}: IGeneralDropDown<T>) {
  const whenSelectItem = (
    eventTarget: HTMLElement,
  ) => {
    setText(eventTarget.textContent || '');
    callback();
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
