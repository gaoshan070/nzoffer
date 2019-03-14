import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { IProgramme } from '../../../../store/AdminStore.type';
import { programmeService } from '../../../../utils/feathers';
import { CommonListScreen } from '../components/CommonListScreen';
import { EditButton } from '../components/EditButton';
import { useAdminStore } from '../../../../store/store.context';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { DeleteButton } from '../components/DeleteButton';

export const AdminProgramme: React.FC<RouteComponentProps> = observer(() => {
  const {
    nzStudyAreas,
    fetchNZStudyAreas,
    nzStudyAreaDetails,
    fetchNZStudyAreaDetails,
    universities,
    fetchUniversities,
  } = useAdminStore();

  useComponentDidMount(async () => {
    if (!nzStudyAreas.length) {
      await fetchNZStudyAreas();
    }
    if (!nzStudyAreaDetails.length) {
      await fetchNZStudyAreaDetails();
    }
    if (!universities.length) {
      await fetchUniversities();
    }
  });

  const renderItem = ({ _id, nameCN }: IProgramme, index: number) => (
    <Box key={_id} alignItems="center">
      <Text width={0.05}>{index + 1}.</Text>
      <Text width={0.2}>{nameCN}</Text>
      <EditButton width={0.2} editURL={ROUTES.ADMIN_PROGRAMME_EDIT} id={_id} />
      <DeleteButton feathersService={programmeService} id={_id} />
    </Box>
  );

  return (
    <CommonListScreen
      title="专业课列表"
      dataKeyName="programmes"
      routeForNew={ROUTES.ADMIN_PROGRAMME_NEW}
      feathersService={programmeService}
      renderItem={renderItem}
    />
  );
});
