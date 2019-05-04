import React from 'react';
import { observer } from 'mobx-react-lite';

export const List: React.FC<{ isOrdered?: boolean }> = observer(
  ({ isOrdered, children }) =>
    isOrdered ? (
      <ol
        style={{
          lineHeight: 1.7,
        }}
      >
        {children}
      </ol>
    ) : (
      <ul
        style={{
          lineHeight: 1.7,
        }}
      >
        {children}
      </ul>
    ),
);
