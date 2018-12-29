import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Box from '../components/Box/Box';
import Header from './Header/Header';
import { ROUTES } from '../routes/routes';
import { css } from '../styles/styledLib';
import { fullscreenCSS } from '../styles/constants';

const boxStyle = css`
  ${fullscreenCSS};
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

const getTitle = (pathname: string): string => {
  const routeMapToTitle = {
    [ROUTES.CHAT]: '开始注册',
    [ROUTES.FINAL_REGISTER]: '完成注册',
    [ROUTES.HOME]: 'Offer111',
    [ROUTES.LOGIN]: '开始登录',
    [ROUTES.PORTAL]: '个人中心',
  };
  return routeMapToTitle[pathname] || '';
};

const Screen: React.FC<RouteComponentProps> = ({
  location,
  children,
}) => (
  <Box
    width={1}
    flexDirection="column"
    alignItems="center"
  >
    <Header title={getTitle(location.pathname)} />
    <Box
      pt="65px"
      bg="background"
      width={1}
      css={boxStyle}
    >
      {children}
    </Box>
  </Box>
);

export default withRouter(Screen);
