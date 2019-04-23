import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { INZStudyAreaDetail } from '../../../../store/AdminStore.type';
import { EditButton } from '../components/EditButton';
import { CommonListScreen } from '../components/CommonListScreen';
import { nzStudyAreaDetailService } from '../../../../utils/feathers';
import { useAdminStore } from '../../../../store/store.context';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { getNameCNFromId } from '../components/utils';

const AdminNZStudyAreaDetail: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { nzStudyAreas, fetchNZStudyAreas } = useAdminStore();

    useComponentDidMount(async () => {
      if (!nzStudyAreas.length) {
        await fetchNZStudyAreas();
      }
    });

    const renderItem = (
      { _id, nameCN, nameEN, nzStudyArea }: INZStudyAreaDetail,
      index: number,
    ) => (
      <Box key={_id} alignItems="center">
        <Text width={0.05}>{index + 1}.</Text>
        <Text width={0.1}>{getNameCNFromId(nzStudyAreas, nzStudyArea)}</Text>
        <Box width={0.4} alignItems="center">
          <Text>
            {nameCN} ({nameEN})
          </Text>
        </Box>
        <EditButton
          width={0.2}
          editURL={ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL_EDIT}
          id={_id}
        />
      </Box>
    );

    return (
      <CommonListScreen
        title="NZ学习领域细分列表"
        dataKeyName="nzStudyAreaDetails"
        routeForNew={ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL_NEW}
        feathersService={nzStudyAreaDetailService}
        renderItem={renderItem}
      />
    );
  },
);

export default AdminNZStudyAreaDetail;
