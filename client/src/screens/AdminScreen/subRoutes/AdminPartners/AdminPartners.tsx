import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { IPartner } from '../../../../store/AdminStore.type';
import { EditButton } from '../components/EditButton';
import { CommonListScreen } from '../components/CommonListScreen';
import { partnerService } from '../../../../utils/feathers';

export const AdminPartners: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const renderItem = (
      { _id, firstName, phone, email }: IPartner,
      index: number,
    ) => (
      <Box key={_id} alignItems="center">
        <Text width={0.05}>{index + 1}.</Text>
        <Box width={0.4} alignItems="center">
          {firstName} ({email}) - {phone}
        </Box>
        <EditButton width={0.2} editURL={ROUTES.ADMIN_PARTNER_EDIT} id={_id} />
      </Box>
    );

    return (
      <CommonListScreen
        title="合作伙伴列表"
        dataKeyName="partners"
        routeForNew={ROUTES.ADMIN_PARTNER_NEW}
        feathersService={partnerService}
        renderItem={renderItem}
      />
    );
  },
);
