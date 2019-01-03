import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';
import { ROUTES } from '../../routes/routesConfig';
import { LOGO } from '../LOGO';

interface IHeader extends RouteComponentProps {
  title: string;
}

const Header: React.FC<IHeader> = ({
  title,
  history,
}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    bg="white1"
    px={[2, 5]}
    py={4}
    width={1}
    position="fixed"
    zIndex={999}
    height="3rem"
    boxShadow="0px 2.5px 7px 3px rgba(0,0,0,0.05)"
  >
    <Box width={1 / 4} pl={3}>
      <LOGO
        cursor="pointer"
        height="1.7rem"
        onClick={() => history.push(ROUTES.HOME)}
      />
    </Box>
    <Box
      width={2 / 4}
      alignItems="center"
      justifyContent="center"
    >
      <Text
        color="primary"
        fontSize={2}
        fontWeight="bold"
      >
        {title}
      </Text>
    </Box>
    <Box width={1 / 4} justifyContent="flex-end" />
  </Box>
);

export default withRouter(Header);
