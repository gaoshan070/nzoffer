import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import posed, { PoseGroup } from 'react-pose';
import Box from '../Box/Box';
import SelectedItem from './SelectedItem';
import DropDownItem, {
  IDropDownItem,
} from './DropDownItem';
import { css as styledCSS } from '../../styles/styledLib';
import { TStyledCSS } from '../Box/Box.type';

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

export type whenSelectItemType = (
  eventTarget: HTMLElement,
) => void;

interface IDropDownProps<T> {
  defaultText?: string;
  toDisplay: string;
  items: Array<T>;
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
  const boxRef = useRef<HTMLDivElement>();
  const itemsLength = items.length;

  useEffect(() => {
    setTimeout(() => {
      if (boxRef.current) {
        boxRef.current.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 690);
  });

  const listHeight =
    itemsLength < 7
      ? `${itemsLength * 40.38}px`
      : '300px';

  function openListOnClick() {
    toggleOpen(!isOpen);
  }

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
        openListOnClick={openListOnClick}
        css={css}
        toDisplay={toDisplay ? toDisplay : defaultText}
        isOpen={isOpen}
      />
      <PoseGroup
        style={{
          position: 'absolute',
          top: 47,
          width: '100%',
          zIndex: 999,
        }}
      >
        {isOpen && (
          <ListBox key="items" width="160px">
            <Box
              position="relative"
              flexDirection="column"
              border="primary"
              height={listHeight}
              bg="white1"
              zIndex={99}
              overflowY="auto"
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
