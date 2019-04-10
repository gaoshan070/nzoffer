import { getTransitionValue } from '../../styles/constants';
import arrowDown from '../../assets/arrowDown.svg';
import { styled } from '../../styles';

interface ImageProps {
  isOpen: boolean;
  isOpenToTop?: boolean;
}

export const DropDownArrow = styled('img').attrs({
  src: arrowDown,
  alt: 'dropdown arrow',
})<ImageProps>`
  transform: ${({ isOpen, isOpenToTop }) =>
    isOpenToTop
      ? isOpen
        ? 'rotate(0deg)'
        : 'rotate(180deg)'
      : isOpen
      ? 'rotate(180deg)'
      : 'rotate(0deg)'};
  transition: ${getTransitionValue()};
`;
