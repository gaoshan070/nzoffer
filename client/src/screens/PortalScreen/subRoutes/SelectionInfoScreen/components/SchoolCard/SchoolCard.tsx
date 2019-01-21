import React from 'react';
import {
  UniLogo,
  DescItem,
  PaperName,
} from './SchoolCard.others';
import {
  Box,
  FONT_SIZE,
  SPACE,
  Text,
} from '../../../../../../styles';

interface ISchoolCard {
  logo: string;
  uniNameCN: string;
  uniNameEN: string;
  paperNameCN: string;
  paperNameEN: string;
  duration: string;
  enroll: string;
  fee: string;
  difficulties: number;
  ielts: string;
  city: string;
}

export const SchoolCard: React.FC<ISchoolCard> = ({
  logo,
  uniNameCN,
  uniNameEN,
  paperNameCN,
  paperNameEN,
  duration,
  enroll,
  fee,
  difficulties,
  ielts,
  city,
}) => (
  <Box
    direction="column"
    alignItems="center"
    bg="white1"
    boxShadow={4}
    p={SPACE.large}
    minHeight="30rem"
    maxHeight="30rem"
    minWidth="20rem"
    maxWidth="20rem"
    height="max-content"
  >
    <UniLogo src={logo} />
    <Text
      color="primary"
      fontWeight="bold"
      my={SPACE.large}
      fontSize={FONT_SIZE.body}
    >
      {uniNameEN} {uniNameCN}
    </Text>
    <PaperName
      paperNameEN={paperNameEN}
      paperNameCN={paperNameCN}
    />
    <DescItem title="课程长度" text={duration} />
    <DescItem title="开学时间" text={enroll} />
    <DescItem title="学费" text={`NZ $${fee}`} />
    <DescItem title="学业难度" text={difficulties} />
    <DescItem title="雅思要求" text={ielts} />
    <DescItem title="城市" text={city} />
  </Box>
);
