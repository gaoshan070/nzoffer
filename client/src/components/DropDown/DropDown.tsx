import React, { useState, useRef, CSSProperties } from 'react';
import { observer } from 'mobx-react-lite';
import SelectedItem from './SelectedItem';
import DropDownItem, { IDropDownItem } from './DropDownItem';
import { DropDownAnimation } from './DropDown.animation';
import { Box, CSSType } from '../../styles';
import { useClickOutside } from '../../miscellaneous/hooks';
import { is, IBox } from '../../styles/rebase';

export type whenSelectItemType = (item: unknown) => void;

interface IDropDownProps<T> {
  defaultText?: string;
  toDisplay: string;
  items: T[];
  getItemProps?: (item: T, index?: number) => IDropDownItem;
  whenSelectItem?: whenSelectItemType;
  css?: CSSType;
  boxProps?: IBox;
  listStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  disable?: boolean;
  isOpenToTop?: boolean;
}

function BaseDropDown<T>({
  defaultText = '请选择',
  toDisplay,
  // @ts-ignore
  items = [''],
  getItemProps,
  whenSelectItem,
  css,
  boxProps,
  listStyle,
  itemStyle,
  disable,
  isOpenToTop,
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
          css={itemStyle ? itemStyle : undefined}
          {...props}
          itemOnClick={e => {
            e.preventDefault();
            e.stopPropagation();

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
      width="150px"
      maxHeight="48px"
      minHeight="48px"
      {...boxProps}
      css={{
        pointerEvents: disable ? 'none' : 'auto',
      }}
    >
      <SelectedItem
        isOpenToTop={isOpenToTop}
        openListOnClick={e => {
          e.preventDefault();
          e.stopPropagation();
          toggleOpen(v => !v);
        }}
        css={css}
        toDisplay={toDisplay ? toDisplay : defaultText}
        isOpen={isOpen}
      />
      <DropDownAnimation
        style={listStyle}
        isOpenToTop={isOpenToTop}
        isOpen={isOpen}
      >
        {startRendering()}
      </DropDownAnimation>
    </Box>
  );
}

// @ts-ignore
export default observer(BaseDropDown) as BaseDropDown;
