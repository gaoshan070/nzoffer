import React from 'react';
import { css } from '../../styles/styledLib';
import { Button, IButton } from '../Button/Button';
import theme, {
  ThemeInterface,
} from '../../styles/theme';

interface IBaseButton extends IButton<ThemeInterface> {
  isSelected: boolean;
  text: string;
  ml?: number;
}

const BaseButton: React.FC<IBaseButton> = ({
  isSelected,
  text,
  onClick,
  ml,
}) => (
  <Button
    ml={ml}
    text={text}
    width={150}
    height={60}
    boxShadow={0}
    bg={isSelected ? 'primary' : 'white1'}
    color={isSelected ? 'white' : 'primary'}
    border="1px solid"
    borderColor="primary"
    css={css`
      background-color: ${theme.colors.white1};
    `}
    onClick={onClick}
  />
);

export default BaseButton;
