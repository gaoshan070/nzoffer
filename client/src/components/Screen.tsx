import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { Box, css, CSSType } from '../styles';
import Header from './Header/Header';
import { ROUTES } from '../routes/routesConfig';
import { fullscreenCSS } from '../styles/constants';
import { SPACE } from '../styles/rebase/styles';

const getBoxStyle = (merge?: CSSType) => css`
  ${fullscreenCSS};
  display: flex;
  justify-content: center;
  ${merge ? merge : ''};
`;

const getTitle = (pathname: string): string => {
  const routeMapToTitle = {
    [ROUTES.CHAT]: '',
    [ROUTES.START_REGISTER]: '',
    [ROUTES.HOME]: '',
    [ROUTES.LOGIN]: '开始登录',
    [ROUTES.PORTAL]: '个人中心',
  };
  return routeMapToTitle[pathname] || '';
};

interface IScreen extends RouteComponentProps {
  css?: CSSType;
}

export const Screen: React.FC<IScreen> = ({
  location,
  children,
  css,
}) => (
  <Box
    width={1}
    direction="column"
    alignItems="center"
  >
    <Header title={getTitle(location.pathname)} />
    <Box
      pt={SPACE.medium}
      bg="background"
      width={1}
      css={getBoxStyle(css)}
    >
      {children}
    </Box>
  </Box>
);

export default withRouter(Screen);
