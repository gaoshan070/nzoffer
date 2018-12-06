import React from 'react';
import Box from '../../../../../components/Box/Box';
import Text from '../../../../../components/Text/Text';
import TextButton from '../../../../../components/Button/TextButton';
import { ROUTES } from '../../../../../routes/routes';

const HeaderLine = () => (
  <Box
    borderBottom="2px solid"
    borderColor="grey"
    pb={3}
    px={2}
    justifyContent="space-between"
    alignItems="center"
    width={1}
  >
    <Text fontWeight="bold" fontSize={2}>
      注册
    </Text>
    <Box alignItems="center">
      <Text fontSize={1} color="lightBlue">
        已有offer111账号？
      </Text>
      <TextButton
        fontSize={1}
        toRoute={ROUTES.LOGIN}
        text="请登录"
      />
    </Box>
  </Box>
);

export default HeaderLine;
