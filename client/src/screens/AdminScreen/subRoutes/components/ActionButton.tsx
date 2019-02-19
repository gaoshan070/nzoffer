import React from 'react';
import { Button } from '../../../../styles';

export const ActionButton: React.FC<{ onClick?: React.ReactEventHandler }> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      maxHeight="32px"
      minHeight="32px"
      onClick={onClick}
      css={{
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {children}
    </Button>
  );
};
