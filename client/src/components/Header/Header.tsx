import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { ROUTES } from '../../routes/routesConfig';
import { LOGO } from '../LOGO';
import { Box, Text } from '../../rebase/components';

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
    px={['small', 'xlarge']}
    py={'medium'}
    width={1}
    position="fixed"
    zIndex={999}
    height="3rem"
    boxShadow={0}
  >
    <Box width={1 / 4} pl="medium">
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
        fontSize="bodyHeading"
        fontWeight="bold"
      >
        {title}
      </Text>
    </Box>
    <Box width={1 / 4} justifyContent="end" />
  </Box>
);

export default withRouter(Header);
