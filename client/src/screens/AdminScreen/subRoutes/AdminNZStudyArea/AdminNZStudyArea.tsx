import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router';
import { ActionButton } from '../components/ActionButton';
import { Box } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { useAdminStore } from '../../../../store/store.context';
import { RenderList } from '../components/RenderList';
import { INZStudyArea } from '../../../../store/AdminStore.type';
import { useComponentDidUpdate } from '../../../../miscellaneous/hooks';
import { nzStudyAreaService } from '../../../../utils/feathers';

export const AdminNZStudyArea: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { nzStudyAreas, update } = useAdminStore();

    useComponentDidUpdate(async () => {
      // start doing the async request here.
      const result = await nzStudyAreaService.find();
      update('nzStudyAreas', result.data);
    });

    function renderItem({ nameCN }: INZStudyArea) {
      return <div>{nameCN}</div>;
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
        <Box width={0.6} direction={'column'}>
          <RenderList data={nzStudyAreas} renderItem={renderItem} />
        </Box>
      </AdminScreen>
    );
  },
);
