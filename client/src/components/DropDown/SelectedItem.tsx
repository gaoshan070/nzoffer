import React from 'react';
import { DropDownArrow } from './DropDownArrow';
import { Box, Text, SPACE, CSSType } from '../../styles';

interface ISelectedItem {
  openListOnClick: React.ReactEventHandler;
  css?: CSSType;
  toDisplay: string;
  isOpen: boolean;
}

const SelectedItem: React.FC<ISelectedItem> = ({
  openListOnClick,
  css,
  toDisplay,
  isOpen,
}) => {
  return (
    <Box
      width={1}
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
      <DropDownArrow id="dropdown-selected" isOpen={isOpen} />
    </Box>
  );
};

export default SelectedItem;
