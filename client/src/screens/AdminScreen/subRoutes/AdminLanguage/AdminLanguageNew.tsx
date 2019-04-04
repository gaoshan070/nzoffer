import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Button } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { languageProgrammeService } from '../../../../utils/feathers';
import { getIsEdit, goBackIfRefreshInEditPage } from '../components/utils';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { useAdminStore } from '../../../../store/store.context';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import {
  isValidDuration,
  isValidStartMonth,
} from '../../../../shared/programmeFieldsCheck';
import { isEngWithSpaceAndNumAndBrackets } from '../../../../shared/enCheck';
import {
  UniversityDropDown,
  useUniversitiesDropDown,
} from '../components/UniversityDropDown';
import { RequiredIELTSScore } from '../components/RequiredIELTSScore';
import { arrayToString, stringToArray } from '../components/AdminScreen.utils';
import { ProgrammeLevelDropDown } from '../components/ProgrammeLevelDropDown';
import DropDown from '../../../../components/DropDown/DropDown';
import { sharedDropDownStyle } from '../../../StartRegisterScreen/subRoutes/components/sharedDropDown';

export const AdminLanguageNew: React.FC<RouteComponentProps> = () => {
  const { languageProgrammes } = useAdminStore();
  goBackIfRefreshInEditPage(history, languageProgrammes);
  const { isEdit, id } = getIsEdit();
  const itemToEdit = languageProgrammes.find(item => item._id === id);

  const [nameCNState, nameCNStateOnChange] = useField(
    isEdit ? itemToEdit!.nameCN : '',
  );

  const [nameENState, nameENStateOnChange] = useField(
    isEdit ? itemToEdit!.nameEN : '',
  );

  const [uniState, setUniState] = useUniversitiesDropDown(
    isEdit,
    itemToEdit ? itemToEdit.university : '',
  );

  const [startMonthState, startMonthStateOnChange] = useField(
    isEdit ? arrayToString(itemToEdit!.startMonth) : '',
  );
  const startMonthValidation = isValidStartMonth(startMonthState);

  const [tuitionFeeInNZDState, tuitionFeeInNZDStateOnChange] = useField(
    isEdit ? itemToEdit!.tuitionFeeInNZD.toString() : '',
  );

  const [lengthInWeeksState, lengthInWeeksStateOnChange] = useField(
    isEdit ? itemToEdit!.lengthInWeeks.toString() : '',
  );

  const [requiredIELTSScoreState, setRequiredIELTSScoreState] = useState(
    isEdit ? itemToEdit!.requiredIELTSScore : '',
  );

  const [programmeLevelState, setProgrammeLevelState] = useState(
    isEdit ? itemToEdit!.programmeLevel : '',
  );

  const [isInstituteCourseState, setIsInstituteCourseState] = useState(
    isEdit ? itemToEdit!.isInstituteCourse : false,
  );

  const isValid = isIncludeChinese(nameCNState);

  return (
    <CommonEditNewScreen
      title="语言课"
      feathersService={languageProgrammeService}
      dataToCreateOrUpdate={{
        nameCN: nameCNState,
        nameEN: nameENState,
        university: uniState._id,
        startMonth:
          startMonthValidation.isValid && startMonthState
            ? stringToArray(startMonthState)
            : [],
        lengthInWeeks: lengthInWeeksState,
        tuitionFeeInNZD: tuitionFeeInNZDState,
        requiredIELTSScore: requiredIELTSScoreState,
        programmeLevel: programmeLevelState,
        isInstituteCourse: isInstituteCourseState,
      }}
      isValid={isValid}
    >
      <ProgrammeLevelDropDown
        toDisplay={programmeLevelState}
        whenSelectItem={v => {
          setProgrammeLevelState(v);
        }}
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
      <Input
        label="输入中文语言课名称"
        placeholder="输入中文语言课名称"
        validate={isIncludeChinese}
        errorMessage="请输入含有中文的语言课名称哦"
        value={nameCNState}
        onChange={nameCNStateOnChange}
      />
      <Input
        label="输入英文语言课名称"
        placeholder="输入英文语言课名称"
        validate={isEngWithSpaceAndNumAndBrackets}
        errorMessage="请输入含有英文的语言课名称哦"
        value={nameENState}
        onChange={nameENStateOnChange}
      />
      <UniversityDropDown
        selected={uniState.nameCN}
        whenSelectItem={item => setUniState(item)}
      />
      <Input
        label="StartMonth： [1, 12]"
        placeholder="StartMonth： [1, 12]"
        validate={v => isValidStartMonth(v).isValid}
        errorMessage={startMonthValidation.errMsg}
        value={startMonthState}
        onChange={startMonthStateOnChange}
      />
      <Input
        label="Tuition (NZD): 45678"
        placeholder="Tuition (NZD): 45678"
        validate={isValidDuration}
        errorMessage="请输入数字"
        value={tuitionFeeInNZDState}
        onChange={tuitionFeeInNZDStateOnChange}
      />
      <Input
        label="课程长度 (周): 12"
        placeholder="课程长度 (周): 12"
        validate={isValidDuration}
        errorMessage="请输入数字"
        value={lengthInWeeksState}
        onChange={lengthInWeeksStateOnChange}
      />
      <RequiredIELTSScore
        toDisplay={requiredIELTSScoreState}
        whenSelectItem={v => {
          setRequiredIELTSScoreState(v);
        }}
      />
    </CommonEditNewScreen>
  );
};
