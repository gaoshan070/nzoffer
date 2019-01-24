import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Screen from '../../../../components/Screen';
import { SchoolCard } from './components/SchoolCard/SchoolCard';
import autLogo from '../../../../assets/uniLogos/aut-logo.png';
import otagoLogo from '../../../../assets/uniLogos/otago-logo.png';
import masseyLogo from '../../../../assets/uniLogos/massey-logo.png';
import writingSVG from '../../../../assets/writing.svg';
import {
  Box,
  Text,
  Image,
  FONT_SIZE,
  SPACE,
} from '../../../../styles';

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

const Loading: React.FC<{ name: string }> = ({
  name,
}) => (
  <Box
    height="90vh"
    justifyContent="center"
    alignItems="center"
    direction="column"
  >
    <Text
      fontSize={FONT_SIZE.bodyHeading}
      fontWeight="bold"
      mb={SPACE.small}
    >
      恭喜{name}同学
    </Text>
    <Text
      fontSize={FONT_SIZE.bodyHeading}
      fontWeight="bold"
      mb={SPACE.small}
    >
      你的最佳学校匹配正在生成中,
    </Text>
    <Text
      fontSize={FONT_SIZE.bodyHeading}
      fontWeight="bold"
    >
      请稍候
    </Text>
    <Image src={writingSVG} width="12rem" />
  </Box>
);

const Schools: React.FC<{
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
      my={SPACE.medium}
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

const SelectSchoolScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  const [toRender, setToRender] = useState(
    <Loading name="Max Ma" />,
  );

  setTimeout(() => {
    setToRender(
      <Schools
        history={history}
        schools={[...schools]}
      />,
    );
  }, 1);

  const isLoading =
    typeof toRender.props['name'] === 'string';

  return (
    <Screen>
      <Box
        direction="column"
        alignItems="center"
        bg="background"
        height="max-content"
        py={SPACE.small}
        px={isLoading ? 'xlarge' : 'none'}
      >
        {toRender}
      </Box>
    </Screen>
  );
};

export default SelectSchoolScreen;
