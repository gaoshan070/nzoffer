import React from 'react';
import { styled, css } from '../styles/styledLib';
import theme from '../styles/theme';

type HTMLInputType =
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

export type onChangeCallBackType = (
  e: React.FormEvent<HTMLInputElement>,
) => void;

interface IInput {
  type: HTMLInputType;
  placeholder: string;
  value: string;
  onChange: onChangeCallBackType;
}

export const placeholderCSS = css`
  font-size: ${theme.fontSizes[4]};
  padding-left: ${theme.space[3]};
  padding-right: ${theme.space[3]};
  color: ${theme.colors.grey1};

  ::placeholder {
    font-size: 1rem;
    padding-left: 1rem;
    line-height: 22.5px;
    vertical-align: center;
  }
`;

const StyledInput = styled.input`
  height: 3.2rem;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.grey};

  ${placeholderCSS};
`;

const Input: React.FC<IInput> = ({
  type,
  value,
  placeholder,
  onChange,
}) => (
  <StyledInput
    placeholder={placeholder}
    type={type}
    onChange={onChange}
    value={value}
  />
);

export default Input;
export { useField } from '../miscellaneous/hooks';
