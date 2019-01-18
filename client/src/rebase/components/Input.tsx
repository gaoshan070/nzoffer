import React from 'react';
import { css as styledCSS, getSafeCss } from '../styles';
import { BaseBox } from './Box/BaseBox';
import { IBaseBox, Responsive } from './Box/BaseBox.type';

type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface IInput extends IBaseBox {
  type?: InputTypes;
  disabled?: boolean;
  width?: Responsive;
  height?: Responsive;
  value?: string | number;
  placeholder?: string | number;
  name?: string;
}

export const Input: React.FC<IInput> = ({ css, ...rest }) => (
  // @ts-ignore
  <BaseBox
    as="input"
    p="xxsmall"
    border={1}
    borderRadius={0}
    overflow="visible"
    flex="1 0 auto"
    css={styledCSS`
      outline: 0;
      ${getSafeCss(css)};
    `}
    {...rest}
  />
);
