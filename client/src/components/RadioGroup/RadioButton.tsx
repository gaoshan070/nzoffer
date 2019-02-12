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
  selectedValue?: string | boolean;
  onChange?: React.ReactEventHandler;
  value: string | boolean;
  label: string;
}> = ({ name, value, label, selectedValue, onChange }) => {
  let selectedValueStr = selectedValue;

  if (selectedValue === true) {
    selectedValueStr = 'true';
  } else if (selectedValue === false) {
    selectedValueStr = 'false';
  }

  const valueStr = typeof value === 'boolean' ? value.toString() : value;

  return (
    <Label>
      {label}
      <input
        type="radio"
        value={valueStr}
        checked={valueStr === selectedValueStr}
        onChange={e => {
          const value = (e.currentTarget as HTMLInputElement).value;
          let result: string | boolean = value;
          if (value === 'true') {
            result = true;
          } else if (value === 'false') {
            result = false;
          }
          // @ts-ignore
          onChange({
            currentTarget: {
              // @ts-ignore
              value: result,
            },
            target: {
              // @ts-ignore
              value: result,
            },
          });
        }}
        name={name}
      />
      <CheckMark />
    </Label>
  );
};
