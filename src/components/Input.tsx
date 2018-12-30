import React from 'react';
import { styled } from '../styles/styledLib';

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

const StyledInput = styled.input`
  height: 45px;
  width: 100%;
  border: 2px solid ${props => props.theme.colors.grey};
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
