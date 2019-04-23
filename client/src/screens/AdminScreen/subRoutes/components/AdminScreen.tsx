import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Heading, FONT_SIZE, COLORS, SPACE } from '../../../../styles';
import { AdminSideBar } from './AdminSideBar';

export const AdminScreen: React.FC<{
  title: string;
  actionButtons?: React.ReactElement;
}> = observer(({ title, children, actionButtons }) => {
  return (
    <Box width={1} height="100vh" overflow="hidden">
      <Box width={0.21} height="100%">
        <AdminSideBar />
      </Box>
      <Box width={0.79} direction="column" px={SPACE.medium} height="100%">
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
