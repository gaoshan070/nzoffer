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
  errorMessage?: ((value: string) => string) | string;
  label?: string;
}

export const Input: React.FC<IMyInput> = ({
  label,
  onChange,
  validate,
  errorMessage = '',
  ...rest
}) => {
  const [isValidateError, setIsError] = useState(false);

  const checkError = (e: React.SyntheticEvent) => {
    const eventValue = (e.currentTarget as HTMLInputElement).value.toString();

    if (typeof validate === 'function') {
      setIsError(!validate(eventValue));
    } else if (validate instanceof RegExp) {
      setIsError(!validate.test(eventValue));
    }
  };

  const onChangeFunc: React.ReactEventHandler = e => {
    if (typeof onChange === 'function') {
      onChange(e);
    }

    checkError(e);
  };

  const onBlueFunc: React.ReactEventHandler = e => {
    checkError(e);
  };

  // const isError = isValidateError && rest.value;
  const isError = isValidateError;

  const borderColorStyle = isError ? { borderColor: COLORS.red } : {};

  let errMsg = errorMessage;
  if (typeof errorMessage === 'function') {
    // @ts-ignore
    errMsg = errorMessage(rest.value || '');
  }

  return (
    <Box direction="column" width={1}>
      {label && (
        <Text mb="4px" fontSize="9pt" color="#7f8fa6">
          {label}
        </Text>
      )}
      <BaseInput
        type="text"
        py={SPACE.xxxSmall}
        minHeight={SIZE.xSmall}
        borderColor={COLORS.greyLine}
        onBlur={onBlueFunc}
        onChange={onChangeFunc}
        {...borderColorStyle}
        {...rest}
      />
      {isError && (
        <Text
          size={FONT_SIZE.small}
          color="red"
          px={SPACE.xxSmall}
          mt={SPACE.xxxSmall}
        >
          {errMsg}
        </Text>
      )}
    </Box>
  );
};
