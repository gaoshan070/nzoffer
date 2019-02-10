import React from 'react';
import { Box, css, SPACE } from '../../styles';

export interface IDropDownItem {
  itemText: string;
  itemOnClick?: React.ReactEventHandler;
  dataIds?: { [idName: string]: string };
}

const DropDownItem = ({ itemText, itemOnClick, dataIds }: IDropDownItem) => {
  const idProps: { [idName: string]: string } = {};
  if (dataIds) {
    Object.keys(dataIds).forEach(propertyName => {
      idProps[`data-${propertyName}`] = dataIds[propertyName];
    });
  }

  return (
    <Box
      onClick={itemOnClick}
      {...idProps}
      alignItems="center"
      px="28px"
      py={SPACE.xxxSmall}
      cursor="pointer"
      transition="all 0.3s ease"
      css={css`
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white1};
        }
      `}
    >
      {itemText}
    </Box>
  );
};

export default DropDownItem;
