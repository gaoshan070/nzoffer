import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Button, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import {
  nzStudyAreaService,
  nzStudyAreaDetailService,
} from '../../../../utils/feathers';
import Alert from 'react-s-alert';
import { useAdminStore } from '../../../../store/store.context';
import { getIsEdit } from '../components/utils';
import { isEngWithSpaceAndNumber } from '../../../../shared/enCheck';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import {
  INZStudyAreaDetail,
  INZStudyArea,
} from '../../../../store/AdminStore.type';
import { NZStudyAreaDropDown } from '../components/NZStudyAreaDropDown';
import { observer } from 'mobx-react-lite';

export const AdminNZStudyAreaDetailNew: React.FC<
  RouteComponentProps
> = observer(({ history }) => {
  const { nzStudyAreaDetails, nzStudyAreas } = useAdminStore();
  const { isEdit, id } = getIsEdit();
  const itemToEdit = isEdit
    ? nzStudyAreaDetails.find(item => item._id === id)
    : ({} as INZStudyAreaDetail);

  const [_nzStudyArea, set_nzStudyArea] = useState<INZStudyArea>(
    // @ts-ignore
    isEdit
      ? nzStudyAreas.find(
          // @ts-ignore
          v => v._id === itemToEdit.nzStudyArea,
        )
      : { _id: '' },
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
      title="新建NZ学习领域细分"
      feathersService={nzStudyAreaDetailService}
      dataToCreateOrUpdate={{
        nameCN: nameCNState,
        nameEN: nameENState,
        nzStudyArea: _nzStudyArea._id,
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
          selected={_nzStudyArea.nameCN}
          whenSelectItem={item => set_nzStudyArea(item)}
        />
      </Box>
    </CommonEditNewScreen>
  );
});
