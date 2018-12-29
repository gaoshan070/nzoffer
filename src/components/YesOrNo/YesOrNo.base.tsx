import React from 'react';
import { css } from '../../styles/styledLib';
import { Button, IButton } from '../Button/Button';
import theme, {
  ThemeInterface,
} from '../../styles/theme';

interface IBaseButton extends IButton<ThemeInterface> {
  isSelected: boolean;
  text: string;
}

const BaseButton: React.FC<IBaseButton> = ({
  isSelected,
  text,
  onClick,
}) => (
  <Button
    text={text}
    width={150}
    height={60}
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
