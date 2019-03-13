import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { IProgramme } from '../../../../store/AdminStore.type';
import { programmeService } from '../../../../utils/feathers';
import { CommonListScreen } from '../components/CommonListScreen';
import { EditButton } from '../components/EditButton';

export const AdminLanguage: React.FC<RouteComponentProps> = observer(() => {
  const renderItem = ({ _id, nameCN }: IProgramme, index: number) => (
    <Box key={_id} alignItems="center">
      <Text width={0.05}>{index + 1}.</Text>
      <Text width={0.2}>{nameCN}</Text>
      <EditButton width={0.2} editURL={ROUTES.ADMIN_LANGUAGES_EDIT} id={_id} />
    </Box>
  );

  return (
    <CommonListScreen
      title="语言课列表"
      dataKeyName="programmes"
      routeForNew={ROUTES.ADMIN_LANGUAGES_NEW}
      feathersService={programmeService}
      renderItem={renderItem}
    />
  );
});
