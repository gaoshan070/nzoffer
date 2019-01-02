import React, { memo, useState } from 'react';
import Box from '../Box/Box';
import SelectedItem from './SelectedItem';
import DropDownItem, {
  IDropDownItem,
} from './DropDownItem';
import { TStyledCSS } from '../Box/Box.type';
import {
  useScrollIntoView,
  useClickOutside,
} from '../../miscellaneous/hooks';
import { DropDownAnimation } from './DropDown.animation';

export type whenSelectItemType = (
  eventTarget: HTMLElement,
) => void;

interface IDropDownProps<T> {
  defaultText?: string;
  toDisplay: string;
  items: T[];
  getItemProps?: (
    item: T,
    index: number,
  ) => IDropDownItem;
  whenSelectItem?: whenSelectItemType;
  css?: TStyledCSS;
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
  const DROPDOWN_LIST_BOX_ID = `dropdown-listBox-${toDisplay}`;

  const [isOpen, toggleOpen] = useState(false);
  const boxRef = useScrollIntoView();
  const outSideRef = useClickOutside(target => {
    if (
      target &&
      (target as HTMLElement).parentElement &&
      (target as HTMLElement).parentElement!.id !==
        DROPDOWN_LIST_BOX_ID
    ) {
      toggleOpen(v => (v ? false : v));
    }
  });

  function itemOnClick(
    e: React.MouseEvent<HTMLElement>,
  ) {
    if (typeof whenSelectItem === 'function') {
      whenSelectItem(e.target as HTMLElement);
    }

    toggleOpen(false);
  }

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
          itemOnClick={itemOnClick}
        />
      );
    });
  }

  return (
    <Box
      flexDirection="column"
      position="relative"
      ref={notScrollInToView ? undefined : boxRef}
      width="160px"
      boxShadow={0}
    >
      <SelectedItem
        openListOnClick={() => {
          toggleOpen(v => !v);
        }}
        css={css}
        toDisplay={toDisplay ? toDisplay : defaultText}
        isOpen={isOpen}
        takeRef={outSideRef}
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
export default memo(DropDown) as DropDown;
