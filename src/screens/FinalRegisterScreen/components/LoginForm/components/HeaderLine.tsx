import React from 'react';
import { FlexCard } from '../../../../../components/buildingBlocks';
import { Text } from 'rebass';
import TextLink from '../../../../../components/TextLink';
import { ROUTES } from '../../../../../routes/routes';

const HeaderLine = () => (
  <FlexCard
    borderBottom="2px solid"
    borderColor="grey"
    pb={3}
    px={2}
    justifyContent="space-between"
    width={1}
  >
    <Text fontWeight={3}>注册</Text>
    <FlexCard>
      <Text fontSize={1} color="lightBlue">
        已有offer111账号？
      </Text>
      <TextLink fontSize={1} toRoute={ROUTES.LOGIN}>
        请登录
      </TextLink>
    </FlexCard>
  </FlexCard>
);

export default HeaderLine;
