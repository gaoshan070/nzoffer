import React from 'react';
import { DropDownArrow } from './DropDownArrow';
import { Box, Text } from '../../rebase/components';
import { CSSType } from '../../rebase/components/Box/BaseBox.type';

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
      ref={takeRef}
      alignItems="center"
      justifyContent="around"
      bg="white1"
      color="white1"
      px="xsmall"
      py="xsmall"
      borderColor="primary"
      border="1px solid"
      cursor="pointer"
      css={css}
      onClick={openListOnClick}
      maxHeight="50px"
    >
      <Text color="primary">{toDisplay}</Text>
      <DropDownArrow isOpen={isOpen} />
    </Box>
  );
};

export default SelectedItem;
