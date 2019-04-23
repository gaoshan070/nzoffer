import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { INZStudyAreaDetail } from '../../../../store/AdminStore.type';
import { EditButton } from '../components/EditButton';
import { CommonListScreen } from '../components/CommonListScreen';
import { cnStudyAreaService } from '../../../../utils/feathers';
import { useAdminStore } from '../../../../store/store.context';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';

const AdminCNStudyArea: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { nzStudyAreas, fetchNZStudyAreas } = useAdminStore();

    useComponentDidMount(async () => {
      if (!nzStudyAreas.length) {
        await fetchNZStudyAreas();
      }
    });

    const renderItem = ({ _id, nameCN }: INZStudyAreaDetail, index: number) => (
      <Box key={_id} alignItems="center">
        <Text width={0.05}>{index + 1}.</Text>
        <Box width={0.2} alignItems="center">
          <Text>{nameCN}</Text>
        </Box>
        <EditButton
          width={0.2}
          editURL={ROUTES.ADMIN_CN_STUDY_AREA_EDIT}
          id={_id}
        />
      </Box>
    );

    return (
      <CommonListScreen
        title="国内对应专业列表"
        dataKeyName="cnStudyAreas"
        routeForNew={ROUTES.ADMIN_CN_STUDY_AREA_NEW}
        feathersService={cnStudyAreaService}
        renderItem={renderItem}
      />
    );
  },
);

export default AdminCNStudyArea;
