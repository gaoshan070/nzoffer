import React from 'react';
import { styled, Box } from '../../styles';
import { colors } from '../../styles/constants';
import { observer } from 'mobx-react-lite';
import { CSSObject } from 'styled-components';
import { IBox } from '../../styles/rebase/components';

const Label = styled.label<{ boxStyle?: React.CSSProperties }>`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 30px;
  font-size: 15px;
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  & > input:checked ~ div > span {
    background-color: ${colors.primary};
  }

  & input:checked ~ div > span {
    display: block;
  }
`;

const CheckMark = styled.span`
  align-self: flex-start;
  position: absolute;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #7f8fa6;
  border-radius: 50%;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const RadioButton: React.FC<
  {
    name?: string;
    selectedValue?: string | boolean;
    onChange?: React.ReactEventHandler;
    value: string | boolean;
    label: string | JSX.Element;
    labelStyle?: React.CSSProperties;
  } & IBox
> = observer(
  ({ name, value, label, selectedValue, onChange, labelStyle, ...rest }) => {
    let selectedValueStr = selectedValue;

    if (selectedValue === true) {
      selectedValueStr = 'true';
    } else if (selectedValue === false) {
      selectedValueStr = 'false';
    }

    const valueStr = typeof value === 'boolean' ? value.toString() : value;

    return (
      <Box width={1} {...rest}>
        <Label>
          <Box
            width={1}
            alignItems="center"
            // @ts-ignore
            css={labelStyle}
          >
            {label}
          </Box>
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
          <Box width={0.2} alignItems="center">
            <CheckMark />
          </Box>
        </Label>
      </Box>
    );
  },
);
