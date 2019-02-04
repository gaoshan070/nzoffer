import React from 'react';
import {
  Box,
  Text,
  FONT_SIZE,
  SPACE,
} from '../../../../../styles';
import { RouteComponentProps } from 'react-router-dom';
import { SchoolCard } from './SchoolCard/SchoolCard';
import autLogo from '../../../../../assets/uniLogos/aut-logo.png';
import otagoLogo from '../../../../../assets/uniLogos/otago-logo.png';
import masseyLogo from '../../../../../assets/uniLogos/massey-logo.png';

interface ISchoolData {
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

export const schools: ISchoolData[] = [
  {
    logo: autLogo,
    uniNameCN: '奥克兰科技大学',
    uniNameEN: 'AUT',
    paperNameCN: '商科本科 (会计专业)',
    paperNameEN: 'Bachelor of Commerce in Accounting',
    duration: '3年',
    enroll: '2019年7月',
    fee: '27，750，00',
    difficulties: 3,
    ielts: '6.5',
    city: '奥克兰',
  },
  {
    logo: otagoLogo,
    uniNameCN: '奥塔哥大学',
    uniNameEN: 'Otago Univeristy',
    paperNameCN: '商科本科 (会计专业)',
    paperNameEN: 'Bachelor of Commerce in Accounting',
    duration: '3年',
    enroll: '2019年7月',
    fee: '27，750，00',
    difficulties: 3,
    ielts: '6.5',
    city: '奥克兰',
  },
  {
    logo: masseyLogo,
    uniNameCN: '梅西大学',
    uniNameEN: 'Massey University',
    paperNameCN: '商科本科 (会计专业)',
    paperNameEN: 'Bachelor of Commerce in Accounting',
    duration: '3年',
    enroll: '2019年7月',
    fee: '27，750，00',
    difficulties: 3,
    ielts: '6.5',
    city: '奥克兰',
  },
];

export const Schools: React.FC<{
  schools: ISchoolData[];
  history: RouteComponentProps['history'];
}> = ({ schools, history }) => (
  <>
    <Box
      width="100vw"
      pt={SPACE.small}
      pb={SPACE.small}
      overflowX="auto"
      bg="background"
      height="max-content"
      css={{
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        width={1}
        justifyContent="center"
        gap={SPACE.xLarge}
      >
        {schools.map(school => (
          <SchoolCard
            key={school.uniNameEN}
            history={history}
            logo={school.logo}
            uniNameCN={school.uniNameCN}
            uniNameEN={school.uniNameEN}
            paperNameCN={school.paperNameCN}
            paperNameEN={school.paperNameEN}
            duration={school.duration}
            enroll={school.enroll}
            fee={school.fee}
            difficulties={school.difficulties}
            ielts={school.ielts}
            city={school.city}
          />
        ))}
      </Box>
    </Box>
    <Text
      fontSize={FONT_SIZE.bodyHeading}
      fontWeight="bold"
      my={SPACE.xxSmall}
      display="flex"
      direction="column"
      alignItems="center"
    >
      请你根据以上每个学校及课程信息（包括：学费。课程长度，学业难度和所在城市）
      <Text size={FONT_SIZE.bodyHeading}>
        选出一个你
        <Text
          display="inline-block"
          size={FONT_SIZE.sectionHeading}
          mx={SPACE.xxSmall}
        >
          最喜欢
        </Text>
        的学校和课程匹配
      </Text>
    </Text>
  </>
);
