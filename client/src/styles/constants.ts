export const fullscreenCSS = `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const getTransitionValue = (
  propertyNames: string = 'transform',
) =>
  `${propertyNames} 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63)`;
