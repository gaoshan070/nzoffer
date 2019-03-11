import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Button, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { INZStudyArea } from '../../../../store/AdminStore.type';
import { nzStudyAreaService } from '../../../../utils/feathers';
import { CommonListScreen } from '../components/CommonListScreen';
import { EditButton } from '../components/EditButton';

export const AdminNZProgramme: React.FC<RouteComponentProps> = observer(() => {
  const renderItem = ({ _id, nameCN }: INZStudyArea, index: number) => (
    <Box key={_id} alignItems="center">
      <Text width={0.05}>{index + 1}.</Text>
      <Text width={0.2}>{nameCN}</Text>
      <EditButton
        width={0.2}
        editURL={ROUTES.ADMIN_NZ_STUDY_AREA_EDIT}
        id={_id}
      />
    </Box>
  );

  return (
    <CommonListScreen
      title="NZ学习领域列表"
      dataKeyName="nzStudyAreas"
      routeForNew={ROUTES.ADMIN_NZ_STUDY_AREA_NEW}
      feathersService={nzStudyAreaService}
      renderItem={renderItem}
    />
  );
});
