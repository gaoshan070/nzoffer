import React from 'react';
import { css, theme, Button, IButton, SPACE } from '../../styles';

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
    boxShadow={0}
    bg={isSelected ? 'primary' : 'white1'}
    color={isSelected ? 'white1' : 'primary'}
    border={1}
    borderColor="primary"
    minHeight={'48px'}
    maxWidth="114px"
    jusitifyContent="center"
    px={0}
    css={css`
      text-shadow: none;
    `}
    onClick={onClick}
    {...rest}
  >
    {text}
  </Button>
);

export default BaseButton;
