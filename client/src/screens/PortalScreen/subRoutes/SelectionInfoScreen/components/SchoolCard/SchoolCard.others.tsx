import React from 'react';
import {
  Box,
  Image,
  Text,
  css,
  SPACE,
} from '../../../../../../styles';

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
    direction="column"
    alignItems="center"
    py={SPACE.xSmall}
    mb={SPACE.medium}
    css={css`
      border-top: 1px solid
        ${({ theme }) => theme.colors.grey};
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey};
    `}
  >
    <Text fontWeight="bold" mb={SPACE.xxSmall}>
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
    my={SPACE.xSmall}
  >
    <Text
      width={0.5}
      justifyContent="end"
      color="fontGrey"
    >
      {`${title}：`}
    </Text>
    <Text width={0.5} justifyContent="start">
      {text}
    </Text>
  </Box>
);
