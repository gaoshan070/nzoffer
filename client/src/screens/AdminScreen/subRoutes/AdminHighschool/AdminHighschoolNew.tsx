import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Text } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { highSchoolService } from '../../../../utils/feathers';
import { getIsEdit, goBackIfRefreshInEditPage } from '../components/utils';
import { getRandomNumberStringInBigRange } from '../../../../shared/generateRandom';
import { useAdminStore } from '../../../../store/store.context';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import { UploadFile } from '../../../../components/UploadFile';
import {
  isValidApplicationDeadline,
  isValidTuitionFee,
  isValidNumberArray,
} from '../../../../shared/programmeFieldsCheck';
import { RequiredIELTSScore } from '../components/RequiredIELTSScore';
import DropDown from '../../../../components/DropDown/DropDown';
import { IHighSchool } from '../../../../store/AdminStore.type';
import { arrayToString, stringToArray } from '../components/AdminScreen.utils';
import {
  chinaDegreesMap,
  gaoKaoScoreLevels,
} from '../../../../shared/sharedData';

export const AdminHighschoolNew: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const { highschools } = useAdminStore();
  goBackIfRefreshInEditPage(history, highschools);
  const { isEdit, id } = getIsEdit();
  const itemToEdit = isEdit
    ? highschools.find(item => item._id === id)
    : ({} as IHighSchool);

  const [programmeLevelState, programmeLevelStateOnChange] = useState(
    isEdit ? itemToEdit!.programmeLevel : '',
  );

  const [requiredAgeState, requiredAgeStateOnChange] = useField(
    isEdit ? (itemToEdit!.requiredAge || '').toString() : '0',
  );

  const [requiredIELTSScoreState, setRequiredIELTSScoreState] = useState(
    isEdit ? itemToEdit!.requiredIELTSScore : '',
  );

  const [nameState, nameStateOnChange] = useField(
    isEdit ? itemToEdit!.name : '',
  );

  const [
    programmeDescriptionState,
    programmeDescriptionStateOnChange,
  ] = useField(isEdit ? itemToEdit!.programmeDescription : '');

  const [locationState, locationStateOnChange] = useField(
    isEdit ? itemToEdit!.location : '',
  );

  const [entryDatesState, entryDatesStateOnChange] = useField(
    isEdit ? arrayToString(itemToEdit!.entryDates) : '',
  );

  const entryDatesValidation = isValidApplicationDeadline(entryDatesState);

  const [tuitionFeeInNZDState, tuitionFeeInNZDStateOnChange] = useField(
    isEdit ? itemToEdit!.tuitionFeeInNZD.toString() : '',
  );
  const [logoURLState, setLogoURLState] = useState(
    isEdit ? itemToEdit!.logoURL || '' : '',
  );
  const [durationInMonthsState, durationInMonthsOnChange] = useField(
    isEdit ? arrayToString(itemToEdit!.durationInMonths) : '',
  );

  const [gaoKaoScoreLevelState, gaoKaoScoreLevelStateOnChange] = useState(
    isEdit ? itemToEdit!.gaoKaoScoreLevel : '',
  );

  const isValid = !!(
    programmeLevelState &&
    nameState &&
    programmeDescriptionState &&
    locationState &&
    entryDatesState &&
    tuitionFeeInNZDState &&
    durationInMonthsState
  );

  return (
    <CommonEditNewScreen
      title="中学"
      feathersService={highSchoolService}
      dataToCreateOrUpdate={{
        programmeLevel: programmeLevelState,
        requiredAge: requiredAgeState,
        requiredIELTSScore: requiredIELTSScoreState,
        name: nameState,
        programmeDescription: programmeDescriptionState,
        location: locationState,
        entryDates: stringToArray(entryDatesState),
        tuitionFeeInNZD: tuitionFeeInNZDState,
        durationInMonths: stringToArray(durationInMonthsState),
        gaoKaoScoreLevel: gaoKaoScoreLevelState,
        logoURL: logoURLState,
      }}
      isValid={isValid}
    >
      <Box gap="16px" alignItems="center">
        <Text>学生国内级别</Text>
        <DropDown
          toDisplay={programmeLevelState}
          items={[
            ...chinaDegreesMap['小学'],
            ...chinaDegreesMap['初中'],
            ...chinaDegreesMap['高中'],
          ]}
          whenSelectItem={(item: string) => {
            programmeLevelStateOnChange(item);
          }}
        />
      </Box>
      <Input
        label="输入年龄段"
        placeholder="输入年龄段"
        validate={v => {
          // @ts-ignore
          return !isNaN(v);
        }}
        errorMessage="请输入数字"
        value={requiredAgeState}
        onChange={requiredAgeStateOnChange}
      />
      <RequiredIELTSScore
        includeNoIELTS
        toDisplay={requiredIELTSScoreState}
        whenSelectItem={v => {
          setRequiredIELTSScoreState(v);
        }}
      />
      <Input
        label="输入中学名称"
        placeholder="输入中学名称"
        validate={v => v !== ''}
        errorMessage="中学名称不可为空🙅"
        value={nameState}
        onChange={nameStateOnChange}
      />
      <Input
        label="输入课程方案"
        placeholder="输入课程方案"
        validate={v => v !== ''}
        errorMessage="课程方案不可为空🙅"
        value={programmeDescriptionState}
        onChange={programmeDescriptionStateOnChange}
      />
      <Input
        label="输入城市区域"
        placeholder="输入城市区域"
        validate={v => v !== ''}
        errorMessage="城市区域不可为空🙅"
        value={locationState}
        onChange={locationStateOnChange}
      />
      <Input
        label="开学时间：31/12, 12/1"
        placeholder="开学时间：31/12, 12/1"
        validate={v => isValidApplicationDeadline(v).isValid}
        errorMessage={entryDatesValidation.errMsg}
        value={entryDatesState}
        onChange={entryDatesStateOnChange}
      />
      <Input
        label="Tuition (NZD): 45678"
        placeholder="Tuition (NZD): 45678"
        value={tuitionFeeInNZDState}
        validate={isValidTuitionFee}
        errorMessage="请输入正确的学费信息"
        onChange={tuitionFeeInNZDStateOnChange}
      />
      <Input
        label="课程时长(月): 1 或 1, 2"
        placeholder="课程时长(月): 1 或 1, 2"
        value={durationInMonthsState}
        validate={v => isValidNumberArray(stringToArray(v))}
        errorMessage="请输入正确的课程时长"
        onChange={durationInMonthsOnChange}
      />
      <Box gap="16px" alignItems="center">
        <Text>所需高考成绩</Text>
        <DropDown
          toDisplay={gaoKaoScoreLevelState}
          items={gaoKaoScoreLevels}
          whenSelectItem={(item: string) => {
            gaoKaoScoreLevelStateOnChange(item);
          }}
        />
      </Box>
      <UploadFile
        label="中学学校LOGO"
        id="upload-file"
        isPublicRead
        fileURL={logoURLState}
        fileName={
          isEdit
            ? logoURLState || getRandomNumberStringInBigRange()
            : getRandomNumberStringInBigRange()
        }
        getUploadedURL={url => setLogoURLState(url)}
      />
    </CommonEditNewScreen>
  );
};
