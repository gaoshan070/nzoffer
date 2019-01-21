import React from 'react';
import {
  Input as BaseInput,
  IInput,
  SIZE,
} from '../styles';

export const Input: React.FC<IInput> = props => (
  <BaseInput
    py="xsmall"
    minHeight={SIZE.xSmall}
    // @ts-ignore
    borderColor="rgba(34, 36, 38, 0.15)"
    {...props}
  />
);
