import {
  styled,
  css,
} from '../../../../../../styles/styledLib';
import Button from '../../../../../../components/Button';
import { ThemeInterface } from '../../../../../../styles/theme';
import { IBox } from '../../../../../../components/Box/Box.type';

function checkIsSelected(): string {
  // @ts-ignore
  return ({
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
}

interface IBaseButton extends IBox<ThemeInterface> {
  isSelected: boolean;
}

type R = React.FC<IBaseButton>;

//@ts-ignore
const BaseButton: R = styled(Button)`
  width: 140px;
  height: 55px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 3%;
  transition: all 0.3s ease;
  ${checkIsSelected};

  &:hover {
    transform: scale(1.05);
  }

  &:not(:active),
  &:not(:hover) {
    transform: scale(1);
  }

  &:active {
    transform: translate(0px, 5px);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export default BaseButton;
