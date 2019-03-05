import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router';
import { ActionButton } from '../components/ActionButton';
import { UploadFile } from '../../../../components/UploadFile';
import { Box } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { useAdminStore } from '../../../../store/store.context';
import { RenderList } from '../components/RenderList';
import { INZStudyArea } from '../../../../store/AdminStore.type';

export const AdminNZStudyArea: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const [fileURL, setFileURL] = useState('');
    const { nzStudyAreas } = useAdminStore();

    function renderItem(item: INZStudyArea) {
      return <div>{item.nameCN}</div>;
    }

    return (
      <AdminScreen
        title="NZ学习领域列表"
        actionButtons={
          <ActionButton
            onClick={() => history.push(ROUTES.ADMIN_NZ_STUDY_AREA_NEW)}
          >
            新建
          </ActionButton>
        }
      >
        <Box width={0.6}>
          <RenderList data={nzStudyAreas} renderItem={renderItem} />
        </Box>
      </AdminScreen>
    );
  },
);
