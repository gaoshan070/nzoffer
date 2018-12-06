import {
  styled,
  css,
} from '../../../../../../styles/styledLib';
import { Button } from '../../../../../../components/Button/Button';
import { ThemeInterface } from '../../../../../../styles/theme';
import { IButton } from '../../../../../../components/Button/Button';

import { baseButtonCSS } from '../../../../../../components/Button/baseButton.css';

interface IBaseButton extends IButton<ThemeInterface> {
  isSelected: boolean;
}

const checkIsSelected = ({
  isSelected,
  theme,
}: {
  isSelected: boolean;
  theme: { [name: string]: any };
}) =>
  isSelected
    ? css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white1};
      `
    : ``;

const BaseButton = styled(Button)<IBaseButton>`
  ${checkIsSelected};
  ${baseButtonCSS};
  width: 150px;
  height: 60px;
` as React.FC<IBaseButton>;

export default BaseButton;
