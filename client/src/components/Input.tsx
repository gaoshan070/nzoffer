import React from 'react';
import {
  Input as BaseInput,
  IInput,
} from '../rebase/components';

export const Input: React.FC<IInput> = props => (
  <BaseInput
    py="xsmall"
    // @ts-ignore
    borderColor="rgba(34, 36, 38, 0.15)"
    {...props}
  />
);
