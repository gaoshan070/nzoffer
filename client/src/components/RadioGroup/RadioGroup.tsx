import React from 'react';
import { Box, IBox, SPACE } from '../../styles';
export { RadioButton } from './RadioButton';

interface IRadioGroup extends IBox {
  name: string;
  selectedValue: string;
  onChange: React.ReactEventHandler;
}

// @ts-ignore
export const RadioGroup: React.FC<IRadioGroup> = ({
  name,
  selectedValue,
  onChange,
  children,
  ...rest
}) => {
  return (
    <Box gap={SPACE.small} {...rest}>
      {React.Children.map(children, child =>
        // @ts-ignore
        React.cloneElement(child, {
          name,
          selectedValue,
          onChange,
        }),
      )}
    </Box>
  );
};
