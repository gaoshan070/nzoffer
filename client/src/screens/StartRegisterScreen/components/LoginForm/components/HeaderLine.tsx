import React from 'react';
import { ROUTES } from '../../../../../routes/routesConfig';
import {
  Box,
  Text,
} from '../../../../../rebase/components';
import LinkButton from '../../../../../components/LinkButton';

const HeaderLine = () => (
  <Box
    borderBottom="2px solid"
    borderColor="grey"
    pb="xsmall"
    px="small"
    justifyContent="between"
    alignItems="center"
    width={1}
  >
    <Text fontWeight="bold" fontSize="bodyHeading">
      注册
    </Text>
    <Box alignItems="center">
      <Text fontSize="body" color="lightBlue">
        已有offer111账号？
      </Text>
      <LinkButton toRoute={ROUTES.LOGIN}>
        请登录
      </LinkButton>
    </Box>
  </Box>
);

export default HeaderLine;
