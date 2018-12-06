import React from 'react';
import GoBackButton from './components/GoBackButton';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';
import TextButton from '../../components/Button/TextButton';
import { ROUTES } from '../../routes/routes';

const Header: React.FC<{ title: string }> = ({
  title,
}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    bg="white1"
    px={[2, 5]}
    py={3}
    width={1}
    position="fixed"
    zIndex={2}
    boxShadow="0px 2.5px 7px 3px rgba(0,0,0,0.15)"
  >
    <Box width={1 / 4}>
      <GoBackButton />
    </Box>
    <Box
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
    </Box>
    <Box width={1 / 4} justifyContent="flex-end">
      <TextButton toRoute={ROUTES.LOGIN} text="登录" />
    </Box>
  </Box>
);

export default Header;
