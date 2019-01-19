import React from 'react';
import {
  Input as BaseInput,
  IInput,
} from '../rebase/components';
import { SIZES } from '../rebase/styles';

export const Input: React.FC<IInput> = props => (
  <BaseInput
    py="xsmall"
    minHeight={SIZES.xsmall}
    // @ts-ignore
    borderColor="rgba(34, 36, 38, 0.15)"
    {...props}
  />
);
