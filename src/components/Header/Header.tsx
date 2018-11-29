import React from 'react';
import { Flex, Box, Text } from 'rebass';
import GoBackButton from './components/GoBackButton';
import { FlexCard } from '../../components/buildingBlocks';
import TextLink from '../../components/TextLink';
import { ROUTES } from '../../routes/routes';

const Header: React.FC<{ title: string }> = ({
  title,
}) => (
  <Flex
    justifyContent="center"
    bg="white1"
    px={[2, 4]}
    py={3}
    width={1}
    css={{
      position: 'fixed',
      boxShadow: '0px 2.5px 7px 3px rgba(0,0,0,0.15)',
      zIndex: 2,
    }}
  >
    <Box width={1 / 4}>
      <GoBackButton />
    </Box>
    <Flex
      width={2 / 4}
      alignItems="center"
      justifyContent="center"
    >
      <Text
        color="primary"
        fontSize={2}
        fontWeight={4}
      >
        {title}
      </Text>
    </Flex>
    <FlexCard
      alignItems="center"
      justifyContent="flex-end"
      width={1 / 4}
    >
      <TextLink toRoute={ROUTES.LOGIN}>登录</TextLink>
    </FlexCard>
  </Flex>
);

export default Header;
