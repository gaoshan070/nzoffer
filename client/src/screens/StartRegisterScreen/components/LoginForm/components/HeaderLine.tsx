import React from 'react';
import { ROUTES } from '../../../../../routes/routesConfig';
import {
  Box,
  FONT_SIZE,
  SPACE,
  Text,
} from '../../../../../styles';
import LinkButton from '../../../../../components/LinkButton';

const HeaderLine = () => (
  <Box
    borderBottom="2px solid"
    borderColor="grey"
    pb={SPACE.xSmall}
    px={SPACE.small}
    justifyContent="between"
    alignItems="center"
    width={1}
  >
    <Text
      fontWeight="bold"
      fontSize={FONT_SIZE.bodyHeading}
    >
      注册
    </Text>
    <Box alignItems="center">
      <Text
        fontSize={FONT_SIZE.body}
        color="lightBlue"
      >
        已有offer111账号？
      </Text>
      <LinkButton toRoute={ROUTES.LOGIN}>
        请登录
      </LinkButton>
    </Box>
  </Box>
);

export default HeaderLine;
