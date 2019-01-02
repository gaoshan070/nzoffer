import React from 'react';
import Box from '../../../../../../components/Box/Box';
import Image from '../../../../../../components/Image';
import Text from '../../../../../../components/Text/Text';
import theme from '../../../../../../styles/theme';

export const UniLogo: React.FC<{
  src: string;
  width?: number | string;
}> = ({ src, width }) => (
  <Image src={src} width={width || '5rem'} />
);

export const UniName: React.FC<{
  uniNameCN: string;
  uniNameEN: string;
  isWhite?: boolean;
}> = ({ isWhite, uniNameCN, uniNameEN }) => (
  <Text
    color={isWhite ? 'white1' : 'primary'}
    fontWeight="bold"
    my={6}
    fontSize={2}
  >
    {uniNameEN} {uniNameCN}
  </Text>
);

export const PaperName: React.FC<{
  paperNameCN: string;
  paperNameEN: string;
  isWhite?: boolean;
}> = ({ paperNameCN, paperNameEN, isWhite }) => (
  <Box
    flexDirection="column"
    alignItems="center"
    py={3}
    mb={6}
    css={{
      borderTop: `1px solid ${theme.colors.grey}`,
      borderBottom: `1px solid ${theme.colors.grey}`,
    }}
    color={isWhite ? 'white1' : 'inherit'}
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

export const Description: React.FC<{
  duration: string;
  enroll: string;
  fee: string;
  difficulties: number;
  ielts: string;
  city: string;
}> = ({
  duration,
  enroll,
  fee,
  difficulties,
  ielts,
  city,
}) => (
  <>
    <DescItem title="课程长度" text={duration} />
    <DescItem title="开学时间" text={enroll} />
    <DescItem title="学费" text={`NZ $${fee}`} />
    <DescItem title="学业难度" text={difficulties} />
    <DescItem title="雅思要求" text={ielts} />
    <DescItem title="城市" text={city} />
  </>
);
