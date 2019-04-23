import React from 'react';
import { Box, Text, FONT_SIZE, SPACE } from '../../../../../styles';
import { RouteComponentProps } from 'react-router';
import { UniCard } from './UniCard/UniCard';
import { observer } from 'mobx-react-lite';
import { IProgramme, IHighSchool } from '../../../../../store/AdminStore.type';
import { HighSchoolCard } from './UniCard/HighSchoolCard';
import { userService } from '../../../../../utils/feathers';
import { getUserId } from '../../../../../utils/token';
import Alert from 'react-s-alert';
import { ROUTES } from '../../../../../routes/routesConfig';
import { useRegStore } from '../../../../../store/store.context';

export const UniList: React.FC<{
  // This is for the cases in /api/get-school-pool
  caseNum: number;
  programmes: IProgramme[] | IHighSchool[];
  history: RouteComponentProps['history'];
}> = observer(({ programmes, history, caseNum }) => {
  const { programmesPool } = useRegStore();
  let isHighSchool = caseNum === 1 || caseNum === 2;

  const isHighSchoolInstituteCase =
    caseNum === 2 &&
    programmesPool.hasOwnProperty('isInstituteCourse') &&
    programmesPool.isInstituteCourse === true;
  if (isHighSchoolInstituteCase) {
    isHighSchool = false;
  }

  let content = null;

  if (isHighSchool) {
    content = (programmes as IHighSchool[]).map(p => (
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
    ));
  } else {
    content = (programmes as IProgramme[]).map(p => (
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
    ));
  }

  const isNoContent = !content || content.length === 0;

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
        <Box width={1} justifyContent="center" gap={SPACE.large}>
          {content}
        </Box>
      </Box>
      <Text
        fontSize={FONT_SIZE.bodyHeading}
        px={[SPACE.xxSmall, 0]}
        mt={SPACE.small}
        display="flex"
        direction="column"
        alignItems="center"
      >
        {isNoContent
          ? '年龄和意向学习级别不符，请返回修改后重试'
          : '根据以上学校的课程信息（包括：学费，课程长度，学业难度和所在城市）'}
        {!isNoContent && (
          <Text
            size={FONT_SIZE.bodyHeading}
            mt={SPACE.xxxSmall}
            alignItems="baseline"
          >
            选出一个你
            <Text
              display="inline-block"
              size={FONT_SIZE.sectionHeading}
              mx={SPACE.xxSmall}
              color={'primary'}
              css={{ letterSpacing: '2px' }}
            >
              最喜欢
            </Text>
            的学校和课程匹配
          </Text>
        )}
      </Text>
    </>
  );
});
