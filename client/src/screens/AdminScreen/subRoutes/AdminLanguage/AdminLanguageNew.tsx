import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Button } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { languageProgrammeService } from '../../../../utils/feathers';
import { getIsEdit } from '../components/utils';
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

export const AdminLanguageNew: React.FC<RouteComponentProps> = () => {
  const { languageProgrammes } = useAdminStore();
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
      }}
      isValid={isValid}
    >
      <Input
        placeholder="输入中文语言课名称"
        validate={isIncludeChinese}
        errorMessage="请输入含有中文的语言课名称哦"
        value={nameCNState}
        onChange={nameCNStateOnChange}
      />
      <Input
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
        placeholder="StartMonth： [1, 12]"
        validate={v => isValidStartMonth(v).isValid}
        errorMessage={startMonthValidation.errMsg}
        value={startMonthState}
        onChange={startMonthStateOnChange}
      />
      <Input
        placeholder="Tuition (NZD): 45678"
        validate={isValidDuration}
        errorMessage="请输入数字"
        value={tuitionFeeInNZDState}
        onChange={tuitionFeeInNZDStateOnChange}
      />
      <Input
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
