import React, { useState } from 'react';
import {
  Box,
  Text,
  Input as BaseInput,
  IInput,
  SIZE,
  SPACE,
  COLORS,
  FONT_SIZE,
} from '../styles';

interface IMyInput extends IInput {
  validate?: RegExp | ((value: string) => boolean);
  errorMessage?: string;
}

export const Input: React.FC<IMyInput> = ({
  onChange,
  validate,
  errorMessage = '',
  ...rest
}) => {
  const [isValidateError, setIsError] = useState(
    false,
  );

  const onChangeFunc: React.ReactEventHandler = e => {
    if (typeof onChange === 'function') {
      onChange(e);
    }

    // @ts-ignore
    const eventValue = e.currentTarget.value.toString();

    if (typeof validate === 'function') {
      setIsError(!validate(eventValue));
    } else if (validate instanceof RegExp) {
      setIsError(!validate.test(eventValue));
    }
  };

  const isError = isValidateError && rest.value;

  const borderColorStyle = isError
    ? { borderColor: COLORS.red }
    : {};

  return (
    <Box direction="column" width={1}>
      <BaseInput
        type="text"
        py={SPACE.xxxSmall}
        minHeight={SIZE.xSmall}
        borderColor={COLORS.greyLine}
        onChange={onChangeFunc}
        {...borderColorStyle}
        {...rest}
      />
      {isError && (
        <Text
          size={FONT_SIZE.small}
          color="red"
          mt={SPACE.xxxSmall}
        >
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};
