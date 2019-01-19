import React, { useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import SelectedItem from './SelectedItem';
import DropDownItem, {
  IDropDownItem,
} from './DropDownItem';
import {
  useScrollIntoView,
  useClickOutside,
} from '../../miscellaneous/hooks';
import { DropDownAnimation } from './DropDown.animation';
import { Box } from '../../rebase/components';
import { CSSType } from '../../rebase/components/Box/BaseBox.type';

export type whenSelectItemType<T> = (item: T) => void;

interface IDropDownProps<T> {
  defaultText?: string;
  toDisplay: string;
  items: T[];
  getItemProps?: (
    item: T,
    index: number,
  ) => IDropDownItem;
  whenSelectItem?: whenSelectItemType<T>;
  css?: CSSType;
  notScrollInToView?: boolean;
}

function DropDown<T>({
  defaultText = '请选择',
  toDisplay,
  items,
  getItemProps,
  whenSelectItem,
  notScrollInToView = false,
  css,
}: IDropDownProps<T>) {
  const [isOpen, toggleOpen] = useState(false);
  const DROPDOWN_LIST_BOX_ID = `dropdown-listBox-${toDisplay}`;

  const boxRef = useRef<HTMLElement>(null);

  if (!notScrollInToView) {
    useScrollIntoView(boxRef);
  }

  useClickOutside(boxRef, target => {
    if (
      target &&
      (target as HTMLElement).parentElement &&
      (target as HTMLElement).parentElement!.id !==
        DROPDOWN_LIST_BOX_ID
    ) {
      toggleOpen(v => (v ? false : v));
    }
  });

  const getItemPropsFunc =
    getItemProps ||
    function(item: T, index: number) {
      return {
        key: index.toString(),
        itemText: item.toString(),
      };
    };

  function startRendering() {
    if (!items.length) return null;
    return items.map((item, index) => {
      const props = getItemPropsFunc(item, index);
      return (
        // tslint:disable-next-line
        <DropDownItem
          {...props}
          itemOnClick={() => {
            if (typeof whenSelectItem === 'function') {
              whenSelectItem(item);
            }

            toggleOpen(false);
          }}
        />
      );
    });
  }

  return (
    <Box
      direction="column"
      position="relative"
      ref={boxRef}
      width="170px"
      boxShadow={0}
    >
      <SelectedItem
        openListOnClick={() => {
          toggleOpen(v => !v);
        }}
        css={css}
        toDisplay={toDisplay ? toDisplay : defaultText}
        isOpen={isOpen}
      />
      <DropDownAnimation
        isOpen={isOpen}
        boxId={DROPDOWN_LIST_BOX_ID}
      >
        {startRendering()}
      </DropDownAnimation>
    </Box>
  );
}

// @ts-ignore
export default observer(DropDown) as DropDown;
