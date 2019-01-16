import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import {
  IEventHandler,
  TStyledCSS,
} from '../Box/Box.type';
import { DropDownArrow } from './DropDownArrow';
interface ISelectedItem {
  openListOnClick: IEventHandler;
  css?: TStyledCSS;
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
      justifyContent="space-around"
      bg="white1"
      color="white1"
      px={1}
      py={3}
      borderColor="primary"
      border="1px solid"
      cursor="pointer"
      css={css}
      onClick={openListOnClick}
    >
      <Text color="primary">{toDisplay}</Text>
      <DropDownArrow isOpen={isOpen} />
    </Box>
  );
};

export default SelectedItem;
