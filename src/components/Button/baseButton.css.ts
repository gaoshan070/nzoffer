import { css } from '../../styles/styledLib';

export const baseButtonCSS = css`
  width: 140px;
  height: 55px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 3%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: translate(0px, 5px);
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:not(:active),
  &:not(:hover) {
    transform: scale(1);
  }
`;
