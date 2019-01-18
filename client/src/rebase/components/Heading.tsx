import React from 'react';
import { IText, Text } from './Text';

export const Heading: React.FC<IText> = ({
  children,
  size,
  ...rest
}) => {
  let tagName: keyof JSX.IntrinsicElements = 'h1';

  if (size === 'heroHeading') {
    tagName = 'h1';
  } else if (size === 'mainHeading') {
    tagName = 'h2';
  } else if (size === 'pageHeading') {
    tagName = 'h3';
  } else if (size === 'sectionHeading') {
    tagName = 'h4';
  } else if (size === 'bodyHeading') {
    tagName = 'h5';
  } else {
    tagName = 'h6';
  }

  return (
    <Text size={size} as={tagName} fontWeight="bold" {...rest}>
      {children}
    </Text>
  );
};
