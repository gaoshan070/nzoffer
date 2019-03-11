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
import { INZStudyArea, ICNStudyArea } from '../../../../store/AdminStore.type';
import { NZStudyAreaDropDown } from '../components/NZStudyAreaDropDown';
import { observer } from 'mobx-react-lite';

export const AdminCNStudyAreaNew: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { cnStudyAreas, nzStudyAreas } = useAdminStore();
    const { isEdit, id } = getIsEdit();
    const itemToEdit = isEdit
      ? cnStudyAreas.find(item => item._id === id)
      : ({} as ICNStudyArea);

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

    const isValid = isIncludeChinese(nameCNState);

    return (
      <CommonEditNewScreen
        title="新建国内对应专业"
        feathersService={cnStudyAreaService}
        dataToCreateOrUpdate={{
          nameCN: nameCNState,
          nzStudyArea: _nzStudyArea._id,
        }}
        isValid={isValid}
      >
        <Box direction="column" gap={SPACE.xSmall}>
          <Input
            placeholder="输入国内对应专业中文名称"
            validate={isIncludeChinese}
            errorMessage="请输入含有中文的名称哦"
            value={nameCNState}
            onChange={nameCNStateOnChange}
          />
          <NZStudyAreaDropDown
            selected={_nzStudyArea.nameCN}
            whenSelectItem={item => set_nzStudyArea(item)}
          />
        </Box>
      </CommonEditNewScreen>
    );
  },
);
