import React from 'react';
import {
  Box,
  Image,
  Text,
  css as cssFunc,
  SPACE,
  FONT_SIZE,
} from '../../../../../../styles';
import { CSSType } from '../../../../../../styles/rebase/components';

export const UniLogo: React.FC<{
  src: string;
  width?: number | string;
}> = ({ src, width }) => <Image src={src} width={width || '5rem'} />;

export const UniName: React.FC<{
  uniNameCN: string;
  uniNameEN: string;
  isWhite?: boolean;
}> = ({ isWhite, uniNameCN, uniNameEN }) => (
  <Text
    color={isWhite ? 'white1' : 'primary'}
    fontWeight="bold"
    fontSize={FONT_SIZE.body}
  >
    {uniNameEN} {uniNameCN}
  </Text>
);

export const PaperName: React.FC<{
  paperNameCN: string;
  paperNameEN: string;
  isWhite?: boolean;
  css?: CSSType;
}> = ({ paperNameCN, paperNameEN, isWhite, css }) => (
  <Box
    direction="column"
    alignItems="center"
    py={SPACE.small}
    css={cssFunc`
      border-top: 1px solid
        ${({ theme }) => theme.colors.grey};
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey};
      ${css ? css : ''};
    `}
    color={isWhite ? 'white1' : 'inherit'}
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
  <Box width={1} justifyContent="center" alignItems="center" my="2px">
    <Text width={0.5} justifyContent="end" color="fontGrey" textAlign="right">
      {`${title}：`}
    </Text>
    <Text width={0.5} justifyContent="start">
      {text}
    </Text>
  </Box>
);

export const Description: React.FC<{
  duration: string;
  enroll: string;
  fee: string;
  difficulties: number;
  ielts: string;
  city: string;
}> = ({ duration, enroll, fee, difficulties, ielts, city }) => (
  <>
    <DescItem title="课程长度" text={duration} />
    <DescItem title="开学时间" text={enroll} />
    <DescItem title="学费" text={`NZ $${fee}`} />
    <DescItem title="学业难度" text={difficulties} />
    <DescItem title="雅思要求" text={ielts} />
    <DescItem title="城市" text={city} />
  </>
);
