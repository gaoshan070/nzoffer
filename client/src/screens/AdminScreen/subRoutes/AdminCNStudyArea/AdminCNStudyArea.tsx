import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router-dom';
import { ActionButton } from '../components/ActionButton';
import { UploadFile } from '../../../../components/UploadFile';
import { Box } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';

export const AdminCNStudyArea: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const [fileURL, setFileURL] = useState('');
    return (
      <AdminScreen
        title="国内对应专业列表"
        history={history}
        actionButtons={
          <ActionButton
            onClick={() => history.push(ROUTES.ADMIN_CN_STUDY_AREA_NEW)}
          >
            新建
          </ActionButton>
        }
      >
        <Box width={0.6}>
          <UploadFile
            fileName="try"
            fileURL={fileURL}
            label="学校LOGO"
            isPublicRead
            getUploadedURL={v => {
              console.log(v);
              setFileURL(v);
            }}
          />
        </Box>
      </AdminScreen>
    );
  },
);
