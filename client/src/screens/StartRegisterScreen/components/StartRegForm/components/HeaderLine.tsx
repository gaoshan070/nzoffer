import React from 'react';
import { ROUTES } from '../../../../../routes/routesConfig';
import { Box, FONT_SIZE, SPACE, Text, COLORS } from '../../../../../styles';
import LinkButton from '../../../../../components/LinkButton';

const HeaderLine = () => (
  <Box
    borderBottom="2px solid"
    borderColor="grey"
    pb={SPACE.xxxSmall}
    pl={[SPACE.none, SPACE.xxSmall]}
    justifyContent="between"
    alignItems="center"
    width={1}
  >
    <Text
      fontWeight="bold"
      color={COLORS.primary}
      fontSize={FONT_SIZE.bodyHeading}
    >
      注册
    </Text>

    <Box alignItems="center" justifyContent="end">
      <Text fontSize={FONT_SIZE.body} color="lightBlue">
        已有offer111账号？
      </Text>
      <LinkButton toRoute={ROUTES.LOGIN} px={1}>
        请登录
      </LinkButton>
    </Box>
  </Box>
);

export default HeaderLine;
