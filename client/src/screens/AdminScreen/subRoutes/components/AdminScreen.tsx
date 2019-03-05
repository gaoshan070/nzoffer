import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { observer } from 'mobx-react-lite';
import {
  Box,
  Text,
  Heading,
  FONT_SIZE,
  COLORS,
  SPACE,
} from '../../../../styles';
import { AdminSideBar } from './AdminSideBar';

export const AdminScreen: React.FC<{
  title: string;
  actionButtons?: React.ReactElement;
}> = observer(({ title, children, actionButtons }) => {
  return (
    <Box width={1} height="100vh">
      <Box width={0.15} height="100%">
        <AdminSideBar />
      </Box>
      <Box width={0.85} direction="column" px={SPACE.medium}>
        <Box justifyContent="between" alignItems="center">
          <Heading size={FONT_SIZE.sectionHeading} color={COLORS.fontGrey}>
            {title}
          </Heading>
          {actionButtons}
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
});
