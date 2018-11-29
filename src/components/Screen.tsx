import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { Flex, Box } from 'rebass';
import Header from './Header/Header';
import { ROUTES } from '../routes/routes';

const boxStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflowY: 'auto',
  display: 'flex',
  justifyContent: 'center',
};

const getTitle = (pathname: string): string => {
  const routeMapToTitle = {
    [ROUTES.CHAT]: '开始注册',
    [ROUTES.FINAL_REGISTER]: '完成注册',
    [ROUTES.HOME]: 'Offer111',
    [ROUTES.LOGIN]: '开始登录',
  };
  return routeMapToTitle[pathname] || '';
};

const Screen: React.FC<RouteComponentProps> = ({
  location,
  children,
}) => (
  <Flex width={1} flexDirection="column">
    <Header title={getTitle(location.pathname)} />
    <Box css={boxStyle} pt={10} bg="background">
      {children}
    </Box>
  </Flex>
);

export default withRouter(Screen);
