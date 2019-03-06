import React from 'react';
import { Box } from '../../../../styles';

interface IRenderList<T> {
  data: T[];
  wrapper?: (children: React.ReactElement[]) => React.ReactElement;
  renderItem: (item: T, index: number) => React.ReactElement;
}

const emptyState = <div>空空的列表</div>;

export function RenderList<T>({
  data,
  renderItem,
}: IRenderList<T>): React.ReactElement {
  if (!data || data.length === 0) return emptyState;

  return (
    <Box direction="column" gap={5}>
      {data.map(renderItem)}
    </Box>
  );
}
