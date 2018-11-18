import React from 'react';
import { Image, Text } from 'rebass';
import { FlexCard } from '../buildingBlocks';
import arrowDown from '../../assets/arrowDown.svg';

const boxShadowStyle =
  '0 4px 16px rgba(0, 0, 0.25, 0.4)';

interface ISelectedItem {
  openListOnClick: Function;
  css?: React.CSSProperties;
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
    <FlexCard
      width="160px"
      alignItems="center"
      justifyContent="space-around"
      bg="white1"
      color="white1"
      px={1}
      py={2}
      boxShadow={boxShadowStyle}
      borderColor="primary"
      border="1px solid"
      css={{
        cursor: 'pointer',
        ...css,
      }}
      onClick={openListOnClick}
    >
      <Text color="primary">{toDisplay}</Text>
      <Image
        css={{
          transform: isOpen
            ? 'rotate(180deg)'
            : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}
        src={arrowDown}
        alt=""
      />
    </FlexCard>
  );
};

export default SelectedItem;
