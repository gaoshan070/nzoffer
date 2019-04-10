import React from 'react';
import { DropDownArrow } from './DropDownArrow';
import { Box, Text, SPACE, CSSType } from '../../styles';

interface ISelectedItem {
  openListOnClick: React.ReactEventHandler;
  css?: CSSType;
  toDisplay: string;
  isOpen: boolean;
  isOpenToTop?: boolean;
}

const SelectedItem: React.FC<ISelectedItem> = ({
  openListOnClick,
  css,
  toDisplay,
  isOpen,
  isOpenToTop,
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
      <Text id="dropdown-selected" color="primary" width={0.8}>
        {toDisplay}
      </Text>
      <Box width={0.2}>
        <DropDownArrow
          id="dropdown-selected"
          isOpenToTop={isOpenToTop}
          isOpen={isOpen}
        />
      </Box>
    </Box>
  );
};

export default SelectedItem;
