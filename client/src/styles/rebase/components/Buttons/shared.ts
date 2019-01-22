export interface INoDefaultHoverCSS {
  noDefaultHoverCSS?: boolean;
}

export const baseNonFlatButtonCSS = `
  text-transform: uppercase;
  overflow: hidden;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const getBaseButtonCSS = (
  hasNoDefaultHover: boolean | undefined,
) => `
  display: inline-block;
  appearance: none;
  text-decoration: none;
  outline: 0;

  text-align: center;
  line-height: inherit;
  white-space: nowrap;

  cursor: pointer;

  ${
    hasNoDefaultHover
      ? ''
      : `&:hover {
          opacity: 0.9;
          transform: scale(1.03);
        }

        &:active {
          transform: scale(1) translate(1px, 1px);
        }`
  }
  
`;
