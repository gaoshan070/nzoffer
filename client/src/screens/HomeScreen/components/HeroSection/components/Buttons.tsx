import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../../../../routes/routesConfig';
import {
  Box,
  Button,
} from '../../../../../rebase/components';

const HomePageButton: React.FC<{
  onClick?: React.ReactEventHandler;
}> = ({ onClick, children }) => (
  <Button
    onClick={onClick}
    width={['9rem', '12rem']}
    fontWeight="regular"
    fontSize="bodyHeading"
  >
    {children}
  </Button>
);

export const Buttons = withRouter(({ history }) => (
  <Box
    mb={['large', 'small']}
    justifyContent="around"
    width={['85%', '50%']}
  >
    <HomePageButton
      onClick={() => history.push(ROUTES.CHAT)}
    >
      我是新人
    </HomePageButton>
    <HomePageButton
      onClick={() => history.push(ROUTES.LOGIN)}
    >
      我已注册
    </HomePageButton>
  </Box>
));
