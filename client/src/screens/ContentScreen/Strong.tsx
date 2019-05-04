import React from 'react';

export const Strong: React.FC<{ style?: React.CSSProperties }> = ({
  style = {},
  children,
}) => (
  <span
    style={{
      fontWeight: 'bold',
      ...style,
    }}
  >
    {children}
  </span>
);
