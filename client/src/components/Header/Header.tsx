import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from '../../routes/routesConfig';
import { LOGO } from '../LOGO';
import { Box, Text, FONT_SIZE, SPACE } from '../../styles';

interface IHeader extends RouteComponentProps {
  title: string;
}

const Header: React.FC<IHeader> = ({ title, history }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    bg="white1"
    px={[SPACE.small, SPACE.large]}
    py={SPACE.small}
    width={1}
    position="fixed"
    zIndex={999}
    height="3rem"
    boxShadow={0}
  >
    <Box width={1 / 4} pl={[SPACE.none, SPACE.medium]}>
      <LOGO
        cursor="pointer"
        height={['4rem', '2rem']}
        onClick={() => history.push(ROUTES.HOME)}
      />
    </Box>
    <Box width={2 / 4} alignItems="center" justifyContent="center">
      <Text color="primary" fontSize={FONT_SIZE.bodyHeading} fontWeight="bold">
        {title}
      </Text>
    </Box>
    <Box width={1 / 4} justifyContent="end" />
  </Box>
);

export default withRouter(Header);
