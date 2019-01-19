import React from 'react';
import {
  Box,
  Image,
  Text,
} from '../../../../../../rebase/components';
import { css } from '../../../../../../rebase/styles';

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
    py="xsmall"
    mb="medium"
    css={css`
      border-top: 1px solid
        ${({ theme }) => theme.colors.grey};
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey};
    `}
  >
    <Text fontWeight="bold" mb="xxsmall">
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
    my="xsmall"
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
