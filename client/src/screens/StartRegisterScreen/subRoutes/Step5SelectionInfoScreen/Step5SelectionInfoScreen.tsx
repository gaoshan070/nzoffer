import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Screen from '../../../../components/Screen';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Box, FONT_SIZE, SPACE, Text } from '../../../../styles';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { ROUTES } from '../../../../routes/routesConfig';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step1Inputs } from '../Step1BasicInfoScreen/Step1Inputs';
import { Step2Inputs } from '../Step2ContactMethodsScreen/Step2Inputs';
import { Step3Inputs } from '../Step3EducationBackgroundScreen/components/Step3Inputs';
import { useRegStore } from '../../../../store/store.context';
import { observer } from 'mobx-react-lite';
import { UniBriefCard } from './components/UniBriefCard';
import { HighSchoolBriefCard } from './components/HighSchoolBriefCard';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';
import Alert from 'react-s-alert';
import { IRegUser } from '../components/utils';
import { UniSelectDate } from './components/UniSelectDate';
import { HighSchoolSelectDate } from './components/HighSchoolSelectDate';
import { userService } from '../../../../utils/feathers';

function getSchoolCard(
  isHighSchool: boolean,
  highschool: IRegUser['selected']['highschool'],
  programme: IRegUser['selected']['programme'],
) {
  let schoolCard = null;

  if (
    (isHighSchool && highschool) ||
    (programme && programme.info.university)
  ) {
    if (isHighSchool) {
      const { info } = highschool;
      schoolCard = (
        <HighSchoolBriefCard
          uniNameEN={info.name}
          paperNameEN={info.programmeDescription}
          location={info.location}
          entryDates={info.entryDates}
          tuitionFeeInNZD={info.tuitionFeeInNZD}
          durationInMonths={info.durationInMonths}
        />
      );
    } else {
      const { info } = programme;
      schoolCard = (
        <UniBriefCard
          uniNameCN={info.university.nameCN}
          uniNameEN={info.university.nameEN}
          paperNameCN={info.nameCN}
          paperNameEN={info.nameEN}
          duration={info.duration}
          startMonth={info.startMonth}
          tuitionFeeInNZD={info.tuitionFeeInNZD}
          difficulty={info.difficulty}
          requiredIELTSScore={info.requiredIELTSScore}
          location={info.location}
        />
      );
    }
  }

  return schoolCard;
}

export const Step5SelectionInfoScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const {
      userId,
      chinaDegree,
      selected,
      fetchUser,
      fetchLanguageProgrammesSelection,
    } = useRegStore();
    const { highschool, programme } = selected;
    const [isTermAgreed, setIsTermAgreed] = useState(false);
    const [highSchoolStartDate, setHighSchoolStartDate] = useState('');
    const [programmeStartDate, setProgrammeStartDate] = useState('');

    useComponentDidMount(async () => {
      await fetchUser();
      await fetchLanguageProgrammesSelection();
    });

    const isHighSchool =
      chinaDegree.startsWith('小') ||
      chinaDegree.startsWith('初') ||
      chinaDegree.startsWith('高');

    return (
      <Screen>
        <Box
          direction="column"
          alignItems="center"
          width={1}
          overflowX="hidden"
          overflowY="auto"
          height={'85vh'}
          pt={SPACE.medium}
          pb={SPACE.large}
          bg="background"
        >
          <Text
            fontSize={FONT_SIZE.bodyHeading}
            my={SPACE.xxxSmall}
            color="primary"
          >
            太棒了，你已完成了你的个人选择
          </Text>
          <InputsBox label="课程信息" shouldOpen>
            {getSchoolCard(isHighSchool, highschool, programme)}
          </InputsBox>

          <Step1Inputs shouldOpen={false} />
          <Step2Inputs shouldOpen={false} />
          <Step3Inputs shouldOpen={false} />

          {isHighSchool ? (
            <HighSchoolSelectDate
              selected={highSchoolStartDate}
              setSelected={setHighSchoolStartDate}
              entryDates={highschool.info.entryDates}
            />
          ) : (
            <UniSelectDate
              selected={programmeStartDate}
              setSelected={setProgrammeStartDate}
              startMonth={programme.info.startMonth}
            />
          )}

          <Box alignItems="center" mt="22px">
            <RadioGroup
              name="is-accept"
              selectedValue={isTermAgreed.toString()}
              onChange={e => {
                // @ts-ignore
                setIsTermAgreed(e.currentTarget.value);
              }}
              alignItems="center"
            >
              <RadioButton
                value
                label="我已经阅读并同意offer111.com的条款和条件"
                labelStyle={{
                  minWidth: '320px',
                }}
              />
            </RadioGroup>
          </Box>
        </Box>
        <BottomNavBar
          history={history}
          continueOnClick={async () => {
            if (!isTermAgreed) {
              Alert.warning('还没同意条款哦, 请单击同意');
              return;
            }

            if (
              (isHighSchool && !highSchoolStartDate) ||
              (!isHighSchool && !programmeStartDate)
            ) {
              Alert.warning('请选择入学日期');
              return;
            }

            const postData = isHighSchool
              ? {
                  highschool: {
                    info: selected.highschool.info,
                    startDate: highSchoolStartDate,
                  },
                }
              : {
                  programme: {
                    info: selected.programme.info,
                    startData: programmeStartDate,
                  },
                };

            await userService.patch(userId, {
              selected: {
                ...postData,
              },
            });

            history.push(ROUTES.PORTAL);
          }}
        />
      </Screen>
    );
  },
);
