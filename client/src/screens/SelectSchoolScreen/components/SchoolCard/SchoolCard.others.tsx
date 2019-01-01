import React from 'react';
import Box from '../../../../components/Box/Box';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text/Text';

export const UniLogo: React.FC<{
  src: string;
  width?: number | string;
}> = ({ src, width }) => (
  <Image src={src} width={width || '5rem'} />
);

export const DescItem: React.FC<{
  title: string;
  text: string | number;
}> = ({ title, text }) => (
  <Box
    width={1}
    justifyContent="center"
    alignItems="center"
  >
    <Text
      width={0.5}
      justifyContent="flex-end"
      color="fontGrey"
    >
      {`${title}：`}
    </Text>
    <Text width={0.5} justifyContent="flex-start">
      {text}
    </Text>
  </Box>
);
