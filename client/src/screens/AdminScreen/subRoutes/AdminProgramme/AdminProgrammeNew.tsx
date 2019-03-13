import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Button } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import {
  nzStudyAreaService,
  programmeService,
} from '../../../../utils/feathers';
import { getIsEdit } from '../components/utils';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { useAdminStore } from '../../../../store/store.context';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import { IProgramme } from '../../../../store/AdminStore.type';
import {
  isValidApplicationDeadline,
  isValidDuration,
  isValidStartMonth,
  isValidTuitionFee,
} from '../../../../shared/programmeFieldsCheck';
import { isEngWithSpaceAndNumber } from '../../../../shared/enCheck';
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

export const AdminProgrammeNew: React.FC<RouteComponentProps> = () => {
  const { programmes } = useAdminStore();
  const { isEdit, id } = getIsEdit();
  const itemToEdit = programmes.find(item => item._id === id);

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
    isEdit ? itemToEdit!.applicationDeadline : '',
  );

  const applicationDeadlineValidation = isValidApplicationDeadline(
    applicationDeadlineState,
  );

  const [durationState, durationStateOnChange] = useField(
    isEdit ? itemToEdit!.duration : '',
  );

  const [startMonthState, startMonthStateOnChange] = useField(
    isEdit ? itemToEdit!.startMonth : '',
  );

  const startMonthValidation = isValidStartMonth(startMonthState);

  const [tuitionFeeInNZDState, tuitionFeeInNZDStateOnChange] = useField(
    isEdit ? itemToEdit!.tuitionFeeInNZD.toString() : '',
  );

  const [requiredUniAverageState, setRequiredUniAverageState] = useState(
    isEdit ? itemToEdit!.requiredUniAverage : '',
  );

  const isValid = isIncludeChinese(nameCNState);

  return (
    <CommonEditNewScreen
      title="专业课"
      feathersService={programmeService}
      dataToCreateOrUpdate={{
        nameCN: nameCNState,
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

      <Input
        placeholder="输入中文专业课名称"
        validate={isIncludeChinese}
        errorMessage="请输入含有中文的名称哦"
        value={nameCNState}
        onChange={nameCNStateOnChange}
      />
      <Input
        placeholder="输入英文专业课名称"
        validate={isEngWithSpaceAndNumber}
        errorMessage="请输入含有英文的名称哦"
        value={nameENState}
        onChange={nameENStateOnChange}
      />
      <UniversityDropDown
        selected={uniState.nameCN}
        whenSelectItem={item => setUniState(item)}
      />
      <Input
        placeholder="输入所在城市名"
        validate={v => v !== ''}
        errorMessage="请输入所在城市"
        value={locationState}
        onChange={locationStateOnChange}
      />

      <Input
        placeholder='Application deadline：["12/31","2/1"]'
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
        placeholder='StartMonth： ["1","12"]'
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
    </CommonEditNewScreen>
  );
};
