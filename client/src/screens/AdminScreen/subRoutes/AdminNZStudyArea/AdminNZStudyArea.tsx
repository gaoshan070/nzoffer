import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router';
import { ActionButton } from '../components/ActionButton';
import { Box, Button, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { useAdminStore } from '../../../../store/store.context';
import { RenderList } from '../components/RenderList';
import { INZStudyArea } from '../../../../store/AdminStore.type';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { nzStudyAreaService } from '../../../../utils/feathers';

export const AdminNZStudyArea: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { nzStudyAreas, update } = useAdminStore();

    useComponentDidMount(async () => {
      // start doing the async request here.
      const result = await nzStudyAreaService.find();
      update('nzStudyAreas', result.data);
    });

    function renderItem({ _id, nameCN }: INZStudyArea, index: number) {
      return (
        <Box key={_id} gap={7} alignItems="center">
          <Text>{index + 1}.</Text>
          <Text>{nameCN}</Text>
          <Button
            fontSize="14px"
            px={2}
            py={1}
            maxHeight="none"
            minHeight={0}
            onClick={() => {
              history.push(ROUTES.ADMIN_NZ_STUDY_AREA_EDIT.replace(':id', _id));
            }}
          >
            编辑
          </Button>
        </Box>
      );
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
        <Box width={0.6} direction="column" gap={4}>
          <RenderList data={nzStudyAreas} renderItem={renderItem} />
        </Box>
      </AdminScreen>
    );
  },
);
