import React from 'react';
import {
  Input as BaseInput,
  IInput,
  SIZE,
  SPACE,
} from '../styles';

export const Input: React.FC<IInput> = props => (
  <BaseInput
    py={SPACE.xxxSmall}
    minHeight={SIZE.xSmall}
    borderColor="greyLine"
    {...props}
  />
);
