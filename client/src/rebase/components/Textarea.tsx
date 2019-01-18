import React from 'react';
import { IInput, Input } from './Input';

export interface ITextarea extends IInput {}

export const Textarea: React.FC<ITextarea> = props => (
  <Input as="textarea" {...props} />
);
