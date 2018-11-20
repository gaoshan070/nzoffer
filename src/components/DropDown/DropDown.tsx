import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { FlexCard } from '../buildingBlocks';
import SelectedItem from './SelectedItem';
import DropDownItem, {
  IDropDownItem,
} from './DropDownItem';
import { styled } from '../../styles/styledLib';

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

const StyledFlexCard = styled(FlexCard)`
  overflow-y: auto;
  z-index: 99;

  &::-webkit-scrollbar-thumb {
    background: #7acce3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background: #edeeef;
  }
`;

export type whenSelectItemType = (
  eventTarget: HTMLElement,
) => void;

interface IDropDownProps<T> {
  defaultText: string;
  toDisplay: string;
  items: Array<T>;
  getItemProps?: (
    item: T,
    index: number,
  ) => IDropDownItem;
  whenSelectItem?: whenSelectItemType;
  css?: React.CSSProperties;
}

function DropDown<T>({
  defaultText,
  toDisplay,
  items,
  getItemProps,
  whenSelectItem,
  css,
}: IDropDownProps<T>) {
  const [isOpen, toggleOpen] = useState(false);

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
    if (!items.length) return null;
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
    <FlexCard
      flexDirection="column"
      css={{
        position: 'relative',
      }}
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
          top: 42,
          width: '100%',
        }}
      >
        {isOpen && (
          <ListBox key="items" width="160px">
            <StyledFlexCard
              style={{ position: 'relative' }}
              flexDirection="column"
              border="primary"
              height="300px"
              bg="white1"
            >
              {startRendering()}
            </StyledFlexCard>
          </ListBox>
        )}
      </PoseGroup>
    </FlexCard>
  );
}

export default DropDown;
