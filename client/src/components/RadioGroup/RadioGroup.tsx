import React from 'react';
import { Box, IBox, SPACE } from '../../styles';
import { observer } from 'mobx-react-lite';

export { RadioButton } from './RadioButton';

interface IRadioGroup extends IBox {
  name: string;
  selectedValue: string;
  onChange: React.ReactEventHandler;
}

// @ts-ignore
export const RadioGroup: React.FC<IRadioGroup> = observer(
  ({ name, selectedValue, onChange, children, gap, ...rest }) => {
    return (
      <Box gap={gap || SPACE.small} {...rest}>
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
  },
);
