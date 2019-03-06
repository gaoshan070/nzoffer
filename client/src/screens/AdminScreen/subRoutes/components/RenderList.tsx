import React from 'react';
import { Box, IBox } from '../../../../styles';

interface IRenderList<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactElement;
  wrapperProps?: IBox;
}

const emptyState = <div>空空的列表</div>;

export function RenderList<T>({
  data,
  renderItem,
  wrapperProps,
}: IRenderList<T>): React.ReactElement {
  if (!data || data.length === 0) return emptyState;

  return (
    <Box
      direction="column"
      gap={5}
      width={1}
      py={5}
      overflowY="auto"
      display="block"
      {...(wrapperProps ? wrapperProps : {})}
    >
      {data.map(renderItem)}
    </Box>
  );
}
