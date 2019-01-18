export const baseButtonCSS = `
  display: inline-block;
  appearance: none;
  text-decoration: none;
  outline: 0;

  text-align: center;
  line-height: inherit;
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(1) translate(1px, 1px);
  }
`;
