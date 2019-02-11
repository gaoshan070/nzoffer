import React from 'react';
import { styled } from '../../styles';
import { colors } from '../../styles/constants';

const Label = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 35px;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  & > span:after {
    top: 7px;
    left: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  & > input:checked ~ span {
    background-color: ${colors.primary};
  }

  & input:checked ~ span:after {
    display: block;
  }
`;

const CheckMark = styled.span`
  position: absolute;
  bottom: -3.5px;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const RadioButton: React.FC<{
  name?: string;
  selectedValue?: string;
  onChange?: React.ReactEventHandler;
  value: string;
  label: string;
}> = ({ name, value, label, selectedValue, onChange }) => {
  return (
    <Label>
      {label}
      <input
        type="radio"
        value={value}
        checked={value === selectedValue}
        onChange={onChange}
        name={name}
      />
      <CheckMark />
    </Label>
  );
};
