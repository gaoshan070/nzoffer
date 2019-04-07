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
  mt?: number | string;
}> = ({ isWhite, uniNameCN, uniNameEN, mt }) => (
  <Text
    color={isWhite ? 'white1' : 'primary'}
    fontWeight="bold"
    fontSize={FONT_SIZE.body}
    css={{ wordWrap: 'normal' }}
    mt={mt}
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
    py={SPACE.xxxSmall}
    width={1}
    mb="4px"
    css={cssFunc`
      border-top: 1px solid
        ${({ theme }) => theme.colors.grey};
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey};
        word-break: break-word;
         white-space: normal;
      ${css ? css : ''};
    `}
    color={isWhite ? 'white1' : 'inherit'}
  >
    <Text
      as="span"
      fontWeight="bold"
      mb={SPACE.xxxxSmall}
      textAlign={'center'}
      width={1}
      // css={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
    >
      {paperNameEN}
    </Text>
    <Text
      as="span"
      fontWeight="bold"
      width={1}
      textAlign={'center'}
      // css={{ wordBreak: 'break-all' }}
    >
      {paperNameCN}
    </Text>
  </Box>
);

export const DescItem: React.FC<{
  title: string;
  text: string | number;
}> = ({ title, text }) => (
  <Box width={1} justifyContent="center" alignItems="center" my="2px">
    <Text width={0.5} justifyContent="end" color="black" textAlign="right">
      {`${title}：`}
    </Text>
    <Text width={0.5} pl="8px" justifyContent="start" color="#2d3436">
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
