import React from 'react';

interface IRenderList<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactElement;
}

const emptyState = <div>空空的列表</div>;

export function RenderList<T>({
  data,
  renderItem,
}: IRenderList<T>): React.ReactElement {
  if (!data || data.length === 0) return emptyState;

  return <>data.map(renderItem)</>;
}
