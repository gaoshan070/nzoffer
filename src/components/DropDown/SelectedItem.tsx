import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import arrowDown from '../../assets/arrowDown.svg';
import {
  IEventHandler,
  TStyledCSS,
} from '../Box/Box.type';
import { styled } from '../../styles/styledLib';

const boxShadowStyle =
  '0 4px 16px rgba(0, 0, 0.25, 0.4)';

interface ImageProps {
  isOpen: boolean;
}
const Image = styled.img<ImageProps>`
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`;

interface ISelectedItem {
  openListOnClick: IEventHandler;
  css?: TStyledCSS;
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
      width="160px"
      alignItems="center"
      justifyContent="space-around"
      bg="white1"
      color="white1"
      px={1}
      py={3}
      boxShadow={boxShadowStyle}
      borderColor="primary"
      border="1px solid"
      cursor="pointer"
      css={css}
      onClick={openListOnClick}
    >
      <Text color="primary">{toDisplay}</Text>
      <Image isOpen={isOpen} src={arrowDown} alt="" />
    </Box>
  );
};

export default SelectedItem;
