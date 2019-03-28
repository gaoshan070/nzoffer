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
    <Box width={1} height="100vh" overflow="hidden">
      <Box width={0.2} height="100%">
        <AdminSideBar />
      </Box>
      <Box width={0.8} direction="column" px={SPACE.medium} height="100%">
        <Box justifyContent="between" alignItems="center" height="10%">
          <Heading size={FONT_SIZE.sectionHeading} color={COLORS.fontGrey}>
            {title}
          </Heading>
          {actionButtons}
        </Box>
        <Box height="90%" width={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
});
