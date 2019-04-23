import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text, Image, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { IUniversity } from '../../../../store/AdminStore.type';
import { EditButton } from '../components/EditButton';
import { CommonListScreen } from '../components/CommonListScreen';
import { universityService } from '../../../../utils/feathers';

const AdminUniversities: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const renderItem = (
      { _id, nameCN, nameEN, logoURL }: IUniversity,
      index: number,
    ) => (
      <Box key={_id} alignItems="center">
        <Text width={0.05}>{index + 1}.</Text>
        <Box width={0.4} alignItems="center" gap={SPACE.small}>
          <Image src={logoURL} width="100px" height="50px" />
          <Box direction="column">
            <Text>{nameCN}</Text>
            <Text>{nameEN}</Text>
          </Box>
        </Box>
        <EditButton
          width={0.2}
          editURL={ROUTES.ADMIN_UNIVERSITIES_EDIT}
          id={_id}
        />
      </Box>
    );

    return (
      <CommonListScreen
        title="大学列表"
        dataKeyName="universities"
        routeForNew={ROUTES.ADMIN_UNIVERSITIES_NEW}
        feathersService={universityService}
        renderItem={renderItem}
      />
    );
  },
);

export default AdminUniversities;
