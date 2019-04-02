import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { programmeService } from '../../../../utils/feathers';
import { getIsEdit } from '../components/utils';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { useAdminStore } from '../../../../store/store.context';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import {
  isValidApplicationDeadline,
  isValidDuration,
  isValidStartMonth,
  isValidTuitionFee,
  isValidStringArray,
} from '../../../../shared/programmeFieldsCheck';
import {
  isEngWithSpaceAndNumber,
  isEngWithSpaceAndNumAndBrackets,
} from '../../../../shared/enCheck';
import {
  NZStudyAreaDropDown,
  useNZStudyAreaDropDown,
} from '../components/NZStudyAreaDropDown';
import {
  NZStudyAreaDetailDropDown,
  useNZStudyAreaDetailDropDown,
} from '../components/NZStudyAreaDetailDropDown';
import {
  UniversityDropDown,
  useUniversitiesDropDown,
} from '../components/UniversityDropDown';
import { RequiredUniAverage } from '../components/RequiredUniAverage';
import { RequiredIELTSScore } from '../components/RequiredIELTSScore';
import { ProgrammeLevelDropDown } from '../components/ProgrammeLevelDropDown';
import DropDown from '../../../../components/DropDown/DropDown';
import { sharedDropDownStyle } from '../../../StartRegisterScreen/subRoutes/components/sharedDropDown';
import { IProgramme } from '../../../../store/AdminStore.type';
import { arrayToString, stringToArray } from '../components/AdminScreen.utils';

export const AdminProgrammeNew: React.FC<RouteComponentProps> = () => {
  const { programmes } = useAdminStore();
  const { isEdit, id } = getIsEdit();
  const itemToEdit = isEdit
    ? programmes.find(item => item._id === id)
    : ({} as IProgramme);

  const [nameCNState, nameCNStateOnChange] = useField(
    isEdit ? itemToEdit!.nameCN : '',
  );

  const [nameENState, nameENStateOnChange] = useField(
    isEdit ? itemToEdit!.nameEN : '',
  );

  const [nzStudyAreaState, setNZStudyAreaState] = useNZStudyAreaDropDown(
    isEdit,
    itemToEdit ? itemToEdit.nzStudyArea : '',
  );

  const [
    nzStudyAreaDetailState,
    setNZStudyAreaDetailState,
  ] = useNZStudyAreaDetailDropDown(
    isEdit,
    itemToEdit ? itemToEdit.nzStudyAreaDetail : '',
  );

  const [uniState, setUniState] = useUniversitiesDropDown(
    isEdit,
    itemToEdit ? itemToEdit.university : '',
  );

  const [locationState, locationStateOnChange] = useField(
    isEdit ? itemToEdit!.location : '',
  );

  const [applicationDeadlineState, applicationDeadlineStateOnChange] = useField(
    isEdit ? arrayToString(itemToEdit!.applicationDeadline) : '',
  );

  const applicationDeadlineValidation = isValidApplicationDeadline(
    applicationDeadlineState,
  );

  const [durationState, durationStateOnChange] = useField(
    isEdit ? itemToEdit!.duration : '',
  );

  const [startMonthState, startMonthStateOnChange] = useField(
    isEdit ? arrayToString(itemToEdit!.startMonth) : '',
  );

  const startMonthValidation = isValidStartMonth(startMonthState);

  const [tuitionFeeInNZDState, tuitionFeeInNZDStateOnChange] = useField(
    isEdit ? itemToEdit!.tuitionFeeInNZD.toString() : '',
  );

  const [difficultyState, difficultyOnChange] = useField(
    isEdit ? itemToEdit!.difficulty.toString() : '',
  );

  const [
    requiredDocumentsNameState,
    requiredDocumentsNameStateOnChange,
  ] = useField(isEdit ? arrayToString(itemToEdit!.requiredDocumentsName) : '');
  const requiredDocumentsNameValidation = isValidStringArray(
    requiredDocumentsNameState,
  );

  const [requiredUniAverageState, setRequiredUniAverageState] = useState(
    isEdit ? itemToEdit!.requiredUniAverage : '',
  );
  const [requiredIELTSScoreState, setRequiredIELTSScoreState] = useState(
    isEdit ? itemToEdit!.requiredIELTSScore : '',
  );
  const [
    educationRequirementState,
    educationRequirementStateOnChange,
  ] = useField(isEdit ? itemToEdit!.educationRequirement : '');
  const [programmeLevelState, setProgrammeLevelState] = useState(
    isEdit ? itemToEdit!.programmeLevel : '',
  );
  const [isInstituteCourseState, setIsInstituteCourseState] = useState(
    isEdit ? itemToEdit!.isInstituteCourse : false,
  );

  const isValid =
    isIncludeChinese(nameCNState) &&
    isEngWithSpaceAndNumber(nameENState) &&
    !!nzStudyAreaState &&
    !!nzStudyAreaDetailState &&
    !!uniState &&
    !!locationState &&
    applicationDeadlineValidation.isValid &&
    isValidDuration(durationState) &&
    isValidStartMonth(startMonthState) &&
    isValidTuitionFee(tuitionFeeInNZDState) &&
    !!requiredUniAverageState &&
    !!requiredIELTSScoreState &&
    !!educationRequirementState &&
    !!programmeLevelState &&
    (isInstituteCourseState || !isInstituteCourseState) &&
    !!difficultyState;

  return (
    <CommonEditNewScreen
      title="专业课"
      feathersService={programmeService}
      dataToCreateOrUpdate={{
        nzStudyArea: nzStudyAreaState._id,
        nzStudyAreaDetail: nzStudyAreaDetailState._id,

        nameCN: nameCNState,
        nameEN: nameENState,
        university: uniState._id,
        location: locationState,

        applicationDeadline: applicationDeadlineValidation.isValid
          ? stringToArray(applicationDeadlineState)
          : [],
        duration: durationState,
        startMonth:
          startMonthValidation.isValid && startMonthState
            ? stringToArray(startMonthState)
            : [],

        tuitionFeeInNZD: tuitionFeeInNZDState,
        requiredUniAverage: requiredUniAverageState,
        requiredIELTSScore: requiredIELTSScoreState,

        educationRequirement: educationRequirementState,

        programmeLevel: programmeLevelState,

        isInstituteCourse: isInstituteCourseState,

        difficulty: difficultyState,

        requiredDocumentsName: stringToArray(requiredDocumentsNameState),
      }}
      isValid={isValid}
    >
      <NZStudyAreaDropDown
        selected={nzStudyAreaState.nameCN}
        whenSelectItem={item => setNZStudyAreaState(item)}
      />
      <NZStudyAreaDetailDropDown
        selected={nzStudyAreaDetailState.nameCN}
        whenSelectItem={item => setNZStudyAreaDetailState(item)}
      />
      <Box alignItems="center" gap={3}>
        理工学院课程:
        <DropDown
          defaultText="请选择是否是理工学院课程"
          toDisplay={isInstituteCourseState ? '是' : '不是'}
          items={['是', '不是']}
          whenSelectItem={(v: string) => {
            setIsInstituteCourseState(v === '是');
          }}
          boxProps={{
            ...sharedDropDownStyle,
            width: '150px',
          }}
          itemStyle={{
            paddingLeft: '4rem',
          }}
        />
      </Box>
      <UniversityDropDown
        selected={uniState.nameCN}
        whenSelectItem={item => setUniState(item)}
      />
      <Input
        placeholder="输入中文专业课名称"
        validate={isIncludeChinese}
        errorMessage="请输入含有中文的名称哦"
        value={nameCNState}
        onChange={nameCNStateOnChange}
      />
      <Input
        placeholder="输入英文专业课名称"
        validate={isEngWithSpaceAndNumAndBrackets}
        errorMessage="请输入含有英文的名称哦"
        value={nameENState}
        onChange={nameENStateOnChange}
      />
      <Input
        placeholder="课程难度"
        validate={isValidDuration}
        errorMessage="请输入数字"
        value={difficultyState}
        onChange={difficultyOnChange}
      />
      <Input
        placeholder="输入所在城市名"
        validate={v => v !== ''}
        errorMessage="请输入所在城市"
        value={locationState}
        onChange={locationStateOnChange}
      />

      <Input
        placeholder="Application deadline：31/12, 12/1"
        validate={v => isValidApplicationDeadline(v).isValid}
        errorMessage={applicationDeadlineValidation.errMsg}
        value={applicationDeadlineState}
        onChange={applicationDeadlineStateOnChange}
      />
      <Input
        placeholder="Duration： 1年 则输入12"
        validate={isValidDuration}
        errorMessage="按月份计数，例如1.5年，则输入18"
        value={durationState}
        onChange={durationStateOnChange}
      />
      <Input
        placeholder="StartMonth： [1, 12]"
        validate={v => isValidStartMonth(v).isValid}
        errorMessage={startMonthValidation.errMsg}
        value={startMonthState}
        onChange={startMonthStateOnChange}
      />

      <Input
        placeholder="Tuition (NZD): 45678"
        value={tuitionFeeInNZDState}
        validate={isValidTuitionFee}
        errorMessage="请输入正确的学费信息"
        onChange={tuitionFeeInNZDStateOnChange}
      />
      <RequiredUniAverage
        toDisplay={requiredUniAverageState}
        whenSelectItem={v => {
          setRequiredUniAverageState(v);
        }}
      />
      <RequiredIELTSScore
        toDisplay={requiredIELTSScoreState}
        whenSelectItem={v => {
          setRequiredIELTSScoreState(v);
        }}
      />
      <Input
        placeholder="EducationRequirement, B,R, +N 等"
        value={educationRequirementState}
        onChange={educationRequirementStateOnChange}
      />
      <ProgrammeLevelDropDown
        toDisplay={programmeLevelState}
        whenSelectItem={v => {
          setProgrammeLevelState(v);
        }}
      />
      <Input
        placeholder="请输入需要上传的文件名： 身份证, ID"
        validate={v => isValidStringArray(v).isValid}
        errorMessage={requiredDocumentsNameValidation.errMsg}
        value={requiredDocumentsNameState}
        onChange={requiredDocumentsNameStateOnChange}
      />
    </CommonEditNewScreen>
  );
};
