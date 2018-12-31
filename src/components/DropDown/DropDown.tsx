import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
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

const DROPDOWN_LIST_BOX_ID = 'dropdown-listBox';

const ListBox = posed.div({
  enter: {
    opacity: 1,
    scaleY: 1,
    originX: 0,
    originY: 0,
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    originX: 0,
    originY: 0,
  },
});

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
}

function DropDown<T>({
  defaultText = '请选择',
  toDisplay,
  items,
  getItemProps,
  whenSelectItem,
  css,
}: IDropDownProps<T>) {
  const [isOpen, toggleOpen] = useState(false);
  const boxRef = useScrollIntoView();
  const outSideRef = useClickOutside(() => {
    toggleOpen(v => !v);
  });

  const itemsLength = items.length;

  const listHeight =
    itemsLength < 7
      ? `${itemsLength * 40.38}px`
      : '300px';

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
    if (!itemsLength) return null;
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
      ref={boxRef}
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
      <PoseGroup
        style={{
          position: 'absolute',
          top: '100%',
          width: '100%',
          zIndex: 999,
        }}
      >
        {isOpen && (
          <ListBox
            id={DROPDOWN_LIST_BOX_ID}
            key="items"
            width="160px"
          >
            <Box
              position="relative"
              flexDirection="column"
              border="primary"
              height={listHeight}
              bg="white1"
              zIndex={99}
              overflowY="auto"
              mb={5}
            >
              {startRendering()}
            </Box>
          </ListBox>
        )}
      </PoseGroup>
    </Box>
  );
}

export default DropDown;
