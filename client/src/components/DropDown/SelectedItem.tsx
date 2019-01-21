import React from 'react';
import { DropDownArrow } from './DropDownArrow';
import { Box, Text, CSSType } from '../../styles';
import { SPACE } from '../../styles/rebase/styles';

interface ISelectedItem {
  openListOnClick: React.ReactEventHandler;
  css?: CSSType;
  toDisplay: string;
  isOpen: boolean;
  takeRef?: React.RefObject<HTMLElement>;
}

const SelectedItem: React.FC<ISelectedItem> = ({
  openListOnClick,
  css,
  toDisplay,
  isOpen,
  takeRef,
}) => {
  return (
    <Box
      id="dropdown-selected"
      ref={takeRef}
      alignItems="center"
      justifyContent="around"
      bg="white1"
      color="white1"
      p={SPACE.xxSmall}
      borderColor="primary"
      border="1px solid"
      cursor="pointer"
      css={css}
      onClick={openListOnClick}
      maxHeight="50px"
    >
      <Text id="dropdown-selected" color="primary">
        {toDisplay}
      </Text>
      <DropDownArrow
        id="dropdown-selected"
        isOpen={isOpen}
      />
    </Box>
  );
};

export default SelectedItem;
