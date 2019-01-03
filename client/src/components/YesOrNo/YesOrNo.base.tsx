import React from 'react';
import { css } from '../../styles/styledLib';
import { Button, IButton } from '../Button/Button';
import theme from '../../styles/theme';

interface IBaseButton extends IButton {
  isSelected: boolean;
  text: string;
  ml?: number;
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
    text={text}
    px="3.65rem"
    py={5}
    boxShadow={0}
    bg={isSelected ? 'primary' : 'white1'}
    color={isSelected ? 'white' : 'primary'}
    border="1px solid"
    borderColor="primary"
    css={css`
      background-color: ${theme.colors.white1};
    `}
    onClick={onClick}
    {...rest}
  />
);

export default BaseButton;
