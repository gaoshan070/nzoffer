import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text, Image } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { IProgramme, IHighSchool } from '../../../../store/AdminStore.type';
import {
  programmeService,
  highSchoolService,
} from '../../../../utils/feathers';
import { CommonListScreen } from '../components/CommonListScreen';
import { EditButton } from '../components/EditButton';
import { useAdminStore } from '../../../../store/store.context';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { DeleteButton } from '../components/DeleteButton';

export const AdminHighschool: React.FC<RouteComponentProps> = observer(() => {
  const renderItem = (
    { _id, name, programmeLevel, programmeDescription, logoURL }: IHighSchool,
    index: number,
  ) => (
    <Box key={_id} alignItems="center">
      <Text width={0.05}>{index + 1}.</Text>
      <Box width={0.12}>
        <Image src={logoURL} height="50px" />
      </Box>
      <Text width={0.1} textAlign="center">
        {programmeLevel}
      </Text>
      <Text width={0.3}>{name}</Text>
      <Text width={0.2}>{programmeDescription}</Text>
      <EditButton
        width={0.07}
        editURL={ROUTES.ADMIN_HIGHSCHOOL_EDIT}
        id={_id}
      />
      <DeleteButton width={0.07} feathersService={highSchoolService} id={_id} />
    </Box>
  );

  return (
    <CommonListScreen
      title="中学列表"
      dataKeyName="highschools"
      routeForNew={ROUTES.ADMIN_HIGHSCHOOL_NEW}
      feathersService={highSchoolService}
      renderItem={renderItem}
    />
  );
});
