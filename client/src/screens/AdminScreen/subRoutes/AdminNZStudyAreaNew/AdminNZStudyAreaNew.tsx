import React, { useState, useEffect } from 'react';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router';
import { Box, Button, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import {
  useField,
  useHistory,
  usePromise,
} from '../../../../miscellaneous/hooks';
import { nzStudyAreaService } from '../../../../utils/feathers';
import Alert from 'react-s-alert';
import { ROUTES } from '../../../../routes/routesConfig';
import { SaveAndCancel } from '../components/SaveAndCancel';
import { getIsEdit } from '../components/utils';
import { isIncludeChinese } from '../../../../shared/cnCheck';

export const AdminNZStudyAreaNew: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const { isEdit, id } = getIsEdit();
  const [nameCNState, nameCNStateOnChange] = useField('');

  const [loadingStatus, result, error, getResult] = usePromise({
    asyncFunc: () =>
      nzStudyAreaService.create({
        nameCN: nameCNState,
      }),
    afterLoaded: data => {
      history.replace(ROUTES.ADMIN_UNIVERSITIES);
    },
  });

  const isValid = isIncludeChinese(nameCNState);

  async function onSave() {
    if (isValid) {
      await getResult();
    } else {
      Alert.error('请好好输入哦');
    }
  }

  return (
    <AdminScreen title="新建NZ学习领域细分">
      <Box direction="column" gap={SPACE.xSmall} minWidth="400px">
        <Input
          placeholder="输入中文学习领域名称"
          validate={isIncludeChinese}
          errorMessage="请输入含有中文的名称哦"
          value={nameCNState}
          onChange={nameCNStateOnChange}
        />
        <SaveAndCancel onSave={onSave} />
      </Box>
    </AdminScreen>
  );
};
