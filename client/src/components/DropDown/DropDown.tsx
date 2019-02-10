import React, { useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import SelectedItem from './SelectedItem';
import DropDownItem, { IDropDownItem } from './DropDownItem';
import { DropDownAnimation } from './DropDown.animation';
import { Box, CSSType } from '../../styles';
import { useClickOutside } from '../../miscellaneous/hooks';
import { is } from '../../styles/rebase';

export type whenSelectItemType<T> = (item: T) => void;

interface IDropDownProps<T> {
  defaultText?: string;
  toDisplay: string;
  items: T[];
  getItemProps?: (item: T, index: number) => IDropDownItem;
  whenSelectItem?: whenSelectItemType<T>;
  css?: CSSType;
  notScrollInToView?: boolean;
}

function BaseDropDown<T>({
  defaultText = '请选择',
  toDisplay,
  items,
  getItemProps,
  whenSelectItem,
  notScrollInToView = false,
  css,
}: IDropDownProps<T>) {
  const [isOpen, toggleOpen] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  useClickOutside(boxRef, () => {
    toggleOpen((v: boolean) => (v ? false : v));
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
            if (is.function(whenSelectItem)) {
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
      takeRef={boxRef}
      width="170px"
      boxShadow={0}
      maxHeight="48px"
      minHeight="48px"
    >
      <SelectedItem
        openListOnClick={() => {
          toggleOpen(v => !v);
        }}
        css={css}
        toDisplay={toDisplay ? toDisplay : defaultText}
        isOpen={isOpen}
      />
      <DropDownAnimation isOpen={isOpen}>{startRendering()}</DropDownAnimation>
    </Box>
  );
}

// @ts-ignore
export default observer(BaseDropDown) as BaseDropDown;
