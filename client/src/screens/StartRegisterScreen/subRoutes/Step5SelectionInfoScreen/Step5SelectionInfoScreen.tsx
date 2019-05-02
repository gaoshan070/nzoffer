import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Box, SPACE, Text } from '../../../../styles';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { ROUTES } from '../../../../routes/routesConfig';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step1Inputs } from '../Step1BasicInfoScreen/Step1Inputs';
import { Step2Inputs } from '../Step2ContactMethodsScreen/Step2Inputs';
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
import { is } from '../../../../styles/rebase/utils/utils';
import { StartRegScreen } from '../../components/StartRegScreen';

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
      schoolCard = is.emptyObject(info) ? null : (
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
      schoolCard = is.emptyObject(info) ? null : (
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
      selected,
      fetchUser,
      fetchLanguageProgrammesSelection,
      isHighSchoolCase,
    } = useRegStore();
    const isHighSchool = isHighSchoolCase();
    const { highschool, programme } = selected;
    const [isTermAgreed, setIsTermAgreed] = useState(false);

    let dateFromUserData = programme.startDate ? programme.startDate : '';
    if (isHighSchool && highschool.startDate) {
      dateFromUserData = highschool.startDate;
    }
    const [startDate, setStartDate] = useState(dateFromUserData);

    useComponentDidMount(async () => {
      await fetchUser();
      await fetchLanguageProgrammesSelection();
    });

    async function continueOnClick() {
      if (!isTermAgreed) {
        Alert.warning('还没同意条款哦, 请单击同意');
        return;
      }

      if (!startDate) {
        Alert.warning('请选择入学日期');
        return;
      }

      const postData = isHighSchool
        ? {
            highschool: {
              info: selected.highschool.info,
              startDate,
            },
          }
        : {
            programme: {
              info: selected.programme.info,
              startDate,
            },
          };

      await userService.patch(userId, {
        selected: {
          ...postData,
        },
      });

      history.push(ROUTES.PORTAL);
    }

    return (
      <StartRegScreen continueOnClick={continueOnClick}>
        <Box
          justifyContent="center"
          overflowY="auto"
          overflowX="hidden"
          width={1}
          height="90vh"
        >
          <Box
            direction="column"
            alignItems="center"
            width={1}
            overflowX="hidden"
            overflowY="auto"
            height="max-content"
            pt={SPACE.medium}
            pb={SPACE.large}
            bg="background"
          >
            <Text fontSize="17px" my={SPACE.xxxSmall} color="primary">
              太棒了，你已完成了你的个人选择！
            </Text>
            <InputsBox label="课程信息" shouldOpen>
              {getSchoolCard(isHighSchool, highschool, programme)}
            </InputsBox>

            <Step1Inputs shouldOpen={false} />
            <Step2Inputs shouldOpen={false} />

            {isHighSchool ? (
              <HighSchoolSelectDate
                selected={startDate}
                setSelected={setStartDate}
                entryDates={highschool.info.entryDates}
              />
            ) : (
              <UniSelectDate
                selected={startDate}
                setSelected={setStartDate}
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
        </Box>
      </StartRegScreen>
    );
  },
);
