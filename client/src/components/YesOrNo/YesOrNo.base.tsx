import React from 'react';
import {
  css,
  myTheme,
  Button,
  IButton,
} from '../../styles';

interface IBaseButton extends IButton {
  isSelected: boolean;
  text: string;
}

const BaseButton: React.FC<IBaseButton> = ({
  isSelected,
  text,
  onClick,
  ml,
  ...rest
}) => (
  <Button
    ml={ml}
    px="medium"
    boxShadow={0}
    bg={isSelected ? 'primary' : 'white1'}
    color={isSelected ? 'white1' : 'primary'}
    border="1px solid"
    borderColor="primary"
    minHeight={'48px'}
    css={css`
      background-color: ${myTheme.colors.white1};
    `}
    onClick={onClick}
    {...rest}
  >
    {text}
  </Button>
);

export default BaseButton;
