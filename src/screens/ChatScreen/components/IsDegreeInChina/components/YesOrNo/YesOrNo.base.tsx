import { styled } from '../../../../../../styles/styledLib';
import { Button as RebassButton } from 'rebass';

const BaseButton = styled(RebassButton)`
  width: 140px;
  height: 55px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 19px -7px rgba(0, 0.9, 0.9, 1.3);
    transform: scale(1.05);
  }

  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
    /* @ts-ignore */
    background-color: ${({ theme }) =>
      theme.colors.primary};
    color: ${({ theme }) => theme.colors.white1};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export default BaseButton;
