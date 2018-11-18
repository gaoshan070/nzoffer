import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { FlexCard } from '../buildingBlocks';
import SelectedItem from './SelectedItem';
import DropDownItem, {
  IDropDownItem,
} from './DropDownItem';

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

export type whenSelectItemType = (
  eventTarget: HTMLElement,
  selectItemFromList: (selectedText: string) => void,
) => void;

interface IDropDownProps<T> {
  css?: React.CSSProperties;
  defaultText: string;
  items: Array<T>;
  getItemProps: (
    item: T,
    index: number,
  ) => IDropDownItem;
  whenSelectItem?: whenSelectItemType;
}

function DropDown<T>({
  css,
  defaultText,
  items,
  getItemProps,
  whenSelectItem,
}: IDropDownProps<T>) {
  const [isOpen, toggleOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    defaultText,
  );

  function openListOnClick() {
    toggleOpen(!isOpen);
  }

  function itemOnClick(
    e: React.MouseEvent<HTMLElement>,
  ) {
    if (typeof whenSelectItem === 'function') {
      whenSelectItem(
        e.target as HTMLElement,
        setSelectedItem,
      );
    }

    toggleOpen(false);
  }

  function startRendering() {
    if (!items.length) return null;
    return items.map((item, index) => {
      const props = getItemProps(item, index);
      return (
        <DropDownItem
          {...props}
          itemOnClick={itemOnClick}
        />
      );
    });
  }

  return (
    <FlexCard
      flexDirection="column"
      css={{
        position: 'relative',
      }}
    >
      <SelectedItem
        openListOnClick={openListOnClick}
        css={css}
        toDisplay={
          selectedItem ? selectedItem : defaultText
        }
        isOpen={isOpen}
      />
      <PoseGroup
        style={{
          position: 'absolute',
          top: 42,
          width: '100%',
        }}
      >
        {isOpen && (
          <ListBox key="items" width="160px">
            <FlexCard
              style={{ position: 'relative' }}
              flexDirection="column"
              border="1px solid #E75B41"
              height="300px"
              bg="white1"
              css={{
                overflowY: 'auto',
                zIndex: '99',
              }}
            >
              {startRendering()}
            </FlexCard>
          </ListBox>
        )}
      </PoseGroup>
    </FlexCard>
  );
}

export default DropDown;
