import React, { useState } from 'react';
import { Box } from 'rebass';

export interface IDropDownItem {
  itemText: string;
  itemOnClick?: Function;
  dataIds?: { [idName: string]: string };
}

const DropDownItem = ({
  itemText,
  itemOnClick,
  dataIds,
}: IDropDownItem) => {
  const [isHover, setIsHover] = useState(false);

  const idProps: { [idName: string]: string } = {};
  if (dataIds) {
    Object.keys(dataIds).forEach(propertyName => {
      idProps[`data-${propertyName}`] =
        dataIds[propertyName];
    });
  }

  function handleMouseOver() {
    setIsHover(true);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  return (
    <Box
      onClick={itemOnClick}
      {...idProps}
      px={3}
      py={3}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      bg={isHover ? 'primary' : 'inherit'}
      color={isHover ? 'white1' : 'black'}
      css={{
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {itemText}
    </Box>
  );
};

export default DropDownItem;
