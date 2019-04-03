import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { cnStudyAreaService } from '../../../../utils/feathers';
import { useAdminStore } from '../../../../store/store.context';
import { getIsEdit } from '../components/utils';
import { isIncludeChinese } from '../../../../shared/cnCheck';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import { ICNStudyArea } from '../../../../store/AdminStore.type';
import {
  NZStudyAreaDropDown,
  useNZStudyAreaDropDown,
} from '../components/NZStudyAreaDropDown';
import { observer } from 'mobx-react-lite';

export const AdminCNStudyAreaNew: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { cnStudyAreas, nzStudyAreas } = useAdminStore();
    const { isEdit, id } = getIsEdit();
    const itemToEdit = isEdit
      ? cnStudyAreas.find(item => item._id === id)
      : ({} as ICNStudyArea);

    const [nzStudyArea, setNZStudyArea] = useNZStudyAreaDropDown(
      isEdit,
      itemToEdit!['nzStudyArea'],
    );

    const [nameCNState, nameCNStateOnChange] = useField(
      isEdit ? itemToEdit!.nameCN : '',
    );

    const isValid = isIncludeChinese(nameCNState);

    return (
      <CommonEditNewScreen
        title="国内对应专业"
        feathersService={cnStudyAreaService}
        dataToCreateOrUpdate={{
          nameCN: nameCNState,
          nzStudyArea: nzStudyArea._id,
        }}
        isValid={isValid}
      >
        <Box direction="column" gap={SPACE.xSmall}>
          <Input
            label="输入国内对应专业中文名称"
            placeholder="输入国内对应专业中文名称"
            validate={isIncludeChinese}
            errorMessage="请输入含有中文的名称哦"
            value={nameCNState}
            onChange={nameCNStateOnChange}
          />
          <NZStudyAreaDropDown
            selected={nzStudyArea.nameCN}
            whenSelectItem={item => setNZStudyArea(item)}
          />
        </Box>
      </CommonEditNewScreen>
    );
  },
);
