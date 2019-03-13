import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { nzStudyAreaDetailService } from '../../../../utils/feathers';
import { useAdminStore } from '../../../../store/store.context';
import { getIsEdit } from '../components/utils';
import { isEngWithSpaceAndNumber } from '../../../../shared/enCheck';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import { INZStudyAreaDetail } from '../../../../store/AdminStore.type';
import {
  NZStudyAreaDropDown,
  useNZStudyAreaDropDown,
} from '../components/NZStudyAreaDropDown';
import { observer } from 'mobx-react-lite';

export const AdminNZStudyAreaDetailNew: React.FC<
  RouteComponentProps
> = observer(() => {
  const { nzStudyAreaDetails } = useAdminStore();
  const { isEdit, id } = getIsEdit();
  const itemToEdit = isEdit
    ? nzStudyAreaDetails.find(item => item._id === id)
    : ({} as INZStudyAreaDetail);

  const [nzStudyArea, setNZStudyArea] = useNZStudyAreaDropDown(
    isEdit,
    itemToEdit!['nzStudyArea'],
  );

  const [nameCNState, nameCNStateOnChange] = useField(
    isEdit ? itemToEdit!.nameCN : '',
  );
  const [nameENState, nameENStateOnChange] = useField(
    isEdit ? itemToEdit!.nameEN : '',
  );
  const isValid = isIncludeChinese(nameCNState);

  return (
    <CommonEditNewScreen
      title="NZ学习领域细分"
      feathersService={nzStudyAreaDetailService}
      dataToCreateOrUpdate={{
        nameCN: nameCNState,
        nameEN: nameENState,
        nzStudyArea: nzStudyArea._id,
      }}
      isValid={isValid}
    >
      <Box direction="column" gap={SPACE.xSmall}>
        <Input
          placeholder="输入中文学习领域细分名称"
          validate={isIncludeChinese}
          errorMessage="请输入含有中文的名称哦"
          value={nameCNState}
          onChange={nameCNStateOnChange}
        />
        <Input
          placeholder="输入英文学习领域细分名称"
          validate={isEngWithSpaceAndNumber}
          errorMessage="请输入含有英文的名称哦"
          value={nameENState}
          onChange={nameENStateOnChange}
        />
        <NZStudyAreaDropDown
          selected={nzStudyArea.nameCN}
          whenSelectItem={item => setNZStudyArea(item)}
        />
      </Box>
    </CommonEditNewScreen>
  );
});
