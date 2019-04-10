import React from 'react';
import { Box, Text, FONT_SIZE, SPACE } from '../../../../../styles';
import { RouteComponentProps } from 'react-router';
import { UniCard } from './UniCard/UniCard';
import autLogo from '../../../../../assets/uniLogos/aut-logo.png';
import otagoLogo from '../../../../../assets/uniLogos/otago-logo.png';
import masseyLogo from '../../../../../assets/uniLogos/massey-logo.png';
import { observer } from 'mobx-react-lite';
import { IProgramme, IHighSchool } from '../../../../../store/AdminStore.type';
import { HighSchoolCard } from './UniCard/HighSchoolCard';
import { userService } from '../../../../../utils/feathers';
import { getUserId } from '../../../../../utils/token';
import Alert from 'react-s-alert';
import { ROUTES } from '../../../../../routes/routesConfig';

interface ISchoolData {
  logo: string;
  uniNameCN: string;
  uniNameEN: string;
  paperNameCN: string;
  paperNameEN: string;
  duration: string;
  startMonth: number[];
  tuitionFeeInNZD: number;
  difficulty: number;
  requiredIELTSScore: string;
  location: string;
}

export const schools: ISchoolData[] = [
  {
    logo: autLogo,
    uniNameCN: '奥克兰科技大学',
    uniNameEN: 'AUT',
    paperNameCN: '商科本科 (会计专业)',
    paperNameEN:
      'Bachelor of Commerce in Accounting Bachelor of Commerce in Accounting',
    duration: '3年',
    startMonth: [1, 2, 3],
    tuitionFeeInNZD: 277500,
    difficulty: 3,
    requiredIELTSScore: '6.5',
    location: '奥克兰',
  },
  {
    logo: otagoLogo,
    uniNameCN: '奥塔哥大学',
    uniNameEN: 'Otago Univeristy',
    paperNameCN: '商科本科 (会计专业)',
    paperNameEN: 'Bachelor of Commerce in Accounting',
    duration: '3年',
    startMonth: [1, 2, 3],
    tuitionFeeInNZD: 277500,
    difficulty: 3,
    requiredIELTSScore: '6.5',
    location: '奥克兰',
  },
  {
    logo: masseyLogo,
    uniNameCN: '梅西大学',
    uniNameEN: 'Massey University',
    paperNameCN: '商科本科 (会计专业)',
    paperNameEN: 'Bachelor of Commerce in Accounting',
    duration: '3年',
    startMonth: [1, 2, 3],
    tuitionFeeInNZD: 277500,
    difficulty: 3,
    requiredIELTSScore: '6.5',
    location: '奥克兰',
  },
];

export const UniList: React.FC<{
  // This is for the cases in /api/get-school-pool
  caseNum: number;
  programmes: IProgramme[] | IHighSchool[];
  history: RouteComponentProps['history'];
}> = observer(({ programmes, history, caseNum }) => {
  const isHighSchool = caseNum === 1 || caseNum === 2;

  return (
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
        <Box width={1} justifyContent="center" gap={SPACE.xLarge}>
          {isHighSchool
            ? (programmes as IHighSchool[]).map(p => (
                <HighSchoolCard
                  key={p._id}
                  history={history}
                  logoURL={p.logoURL}
                  name={p.name}
                  programmeDescription={p.programmeDescription}
                  location={p.location}
                  entryDates={p.entryDates}
                  tuitionFeeInNZD={p.tuitionFeeInNZD}
                  durationInMonths={p.durationInMonths}
                  onClick={async () => {
                    const userId = await getUserId();
                    try {
                      await userService.patch(userId, {
                        selected: {
                          highschool: {
                            info: p._id,
                          },
                        },
                      });
                      history.push(ROUTES.SELECTION_INFO);
                    } catch {
                      Alert.error('呀，未知错误，请稍候再试');
                    }
                  }}
                />
              ))
            : (programmes as IProgramme[]).map(p => (
                <UniCard
                  key={p._id}
                  history={history}
                  logo={p.university.logoURL}
                  uniNameCN={p.university.nameCN}
                  uniNameEN={p.university.nameEN}
                  paperNameCN={p.nameCN}
                  paperNameEN={p.nameEN}
                  duration={p.duration}
                  startMonth={p.startMonth}
                  tuitionFeeInNZD={p.tuitionFeeInNZD}
                  difficulty={p.difficulty}
                  requiredIELTSScore={p.requiredIELTSScore}
                  location={p.location}
                  onClick={async () => {
                    const userId = await getUserId();
                    try {
                      await userService.patch(userId, {
                        selected: {
                          programme: {
                            info: p._id,
                          },
                        },
                      });
                      history.push(ROUTES.SELECTION_INFO);
                    } catch {
                      Alert.error('呀，未知错误，请稍候再试');
                    }
                  }}
                />
              ))}
        </Box>
      </Box>
      <Text
        fontSize={FONT_SIZE.bodyHeading}
        mt={SPACE.small}
        display="flex"
        direction="column"
        alignItems="center"
      >
        请根据以上每个学校及课程信息（包括：学费，课程长度，学业难度和所在城市）
        <Text size={FONT_SIZE.bodyHeading} mt={SPACE.xxxSmall} fontWeight={700}>
          选出一个你
          <Text
            display="inline-block"
            size={FONT_SIZE.sectionHeading}
            mx={SPACE.xxSmall}
            color={'primary'}
          >
            最喜欢
          </Text>
          的学校和课程匹配
        </Text>
      </Text>
    </>
  );
});
