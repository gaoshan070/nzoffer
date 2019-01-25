import React from 'react';
import {
  Input as BaseInput,
  IInput,
  SIZE,
  SPACE,
} from '../styles';

export const Input: React.FC<IInput> = props => (
  <BaseInput
    py={SPACE.xxSmall}
    minHeight={SIZE.xSmall}
    // @ts-ignore
    borderColor="rgba(34, 36, 38, 0.15)"
    {...props}
  />
);
