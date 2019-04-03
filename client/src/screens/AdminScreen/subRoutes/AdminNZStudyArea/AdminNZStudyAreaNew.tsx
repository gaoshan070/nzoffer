import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Button } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { nzStudyAreaService } from '../../../../utils/feathers';
import { getIsEdit } from '../components/utils';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { useAdminStore } from '../../../../store/store.context';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';

export const AdminNZStudyAreaNew: React.FC<RouteComponentProps> = () => {
  const { nzStudyAreas } = useAdminStore();
  const { isEdit, id } = getIsEdit();
  const [nameCNState, nameCNStateOnChange] = useField(
    isEdit ? nzStudyAreas.filter(item => item._id === id)[0].nameCN : '',
  );

  const isValid = isIncludeChinese(nameCNState);

  return (
    <CommonEditNewScreen
      title="NZ学习领域"
      feathersService={nzStudyAreaService}
      dataToCreateOrUpdate={{
        nameCN: nameCNState,
      }}
      isValid={isValid}
    >
      <Input
        label="输入中文学习领域名称"
        placeholder="输入中文学习领域名称"
        validate={isIncludeChinese}
        errorMessage="请输入含有中文的名称哦"
        value={nameCNState}
        onChange={nameCNStateOnChange}
      />
    </CommonEditNewScreen>
  );
};
