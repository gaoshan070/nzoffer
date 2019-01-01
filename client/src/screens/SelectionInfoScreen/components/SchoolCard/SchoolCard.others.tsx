import React from 'react';
import Box from '../../../../components/Box/Box';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text/Text';
import theme from '../../../../styles/theme';

export const UniLogo: React.FC<{
  src: string;
  width?: number | string;
}> = ({ src, width }) => (
  <Image src={src} width={width || '5rem'} />
);

export const PaperName: React.FC<{
  paperNameCN: string;
  paperNameEN: string;
}> = ({ paperNameCN, paperNameEN }) => (
  <Box
    flexDirection="column"
    alignItems="center"
    py={3}
    mb={6}
    css={{
      borderTop: `1px solid ${theme.colors.grey}`,
      borderBottom: `1px solid ${theme.colors.grey}`,
    }}
  >
    <Text fontWeight="bold" mb={1}>
      {paperNameEN}
    </Text>
    <Text fontWeight="bold">{paperNameCN}</Text>
  </Box>
);

export const DescItem: React.FC<{
  title: string;
  text: string | number;
}> = ({ title, text }) => (
  <Box
    width={1}
    justifyContent="center"
    alignItems="center"
    my={2}
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
