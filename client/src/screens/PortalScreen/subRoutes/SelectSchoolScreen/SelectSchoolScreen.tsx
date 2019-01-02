import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Box from '../../../../components/Box/Box';
import Text from '../../../../components/Text/Text';
import Image from '../../../../components/Image';
import Screen from '../../../../components/Screen';
import { SchoolCard } from './components/SchoolCard/SchoolCard';
import autLogo from '../../../../assets/uniLogos/aut-logo.png';
import otagoLogo from '../../../../assets/uniLogos/otago-logo.png';
import masseyLogo from '../../../../assets/uniLogos/massey-logo.png';
import writingSVG from '../../../../assets/writing.svg';

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
    flexDirection="column"
  >
    <Text fontSize={3} fontWeight="bold" mb={3}>
      恭喜{name}同学
    </Text>
    <Text fontSize={3} fontWeight="bold" mb={3}>
      你的最佳学校匹配正在生成中,
    </Text>
    <Text fontSize={3} fontWeight="bold">
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
      justifyContent="space-around"
      pt={7}
      pb={9}
      overflowX="scroll"
      bg="background"
      css={{
        whiteSpace: 'nowrap',
      }}
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
          ml={8}
        />
      ))}
    </Box>
    <Text fontSize={2} fontWeight="bold" mt={6}>
      请根据以上信息，单击选择你最喜欢的学校和课程
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
        schools={[...schools, ...schools]}
      />,
    );
  }, 2000);

  const isLoading =
    typeof toRender.props['name'] === 'string';

  return (
    <Screen>
      <Box
        flexDirection="column"
        alignItems="center"
        bg="background"
        py={5}
        px={isLoading ? 7 : 0}
      >
        {toRender}
      </Box>
    </Screen>
  );
};

export default SelectSchoolScreen;
