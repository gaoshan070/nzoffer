import React, { CSSProperties } from 'react';
import { Box, css as cssFunc, SPACE } from '../../styles';

export interface IDropDownItem {
  itemText: string;
  itemOnClick?: React.ReactEventHandler;
  dataIds?: { [idName: string]: string };
  css?: CSSProperties;
}

const DropDownItem = ({
  itemText,
  itemOnClick,
  dataIds,
  css,
}: IDropDownItem) => {
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
      py={SPACE.xxxSmall}
      cursor="pointer"
      transition="all 0.3s ease"
      css={cssFunc`
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white1};
        }
        ${
          // @ts-ignore
          css ? css : ''
        };
      `}
    >
      {itemText}
    </Box>
  );
};

export default DropDownItem;
