import React from 'react';
import Box from '../../../../../../components/Box/Box';
import Image from '../../../../../../components/Image';
import Text from '../../../../../../components/Text/Text';
import {
  UniLogo,
  DescItem,
  PaperName,
} from './SchoolCard.others';
import theme from '../../../../../../styles/theme';

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
    flexDirection="column"
    alignItems="center"
    bg="white"
    boxShadow={4}
    p={7}
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
      my={6}
      fontSize={2}
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
