import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Box from '../components/Box/Box';
import Header from './Header/Header';
import { ROUTES } from '../routes/routesConfig';
import { css } from '../styles/styledLib';
import { fullscreenCSS } from '../styles/constants';
import { FlattenInterpolation } from 'styled-components';
import { ThemeInterface } from '../styles/theme';

const getBoxStyle = (
  merge: FlattenInterpolation<ThemeInterface>,
) => css`
  ${fullscreenCSS};
  display: flex;
  justify-content: center;
  ${merge};
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
  css?:
    | FlattenInterpolation<ThemeInterface>
    | React.CSSProperties;
}

export const Screen: React.FC<IScreen> = ({
  location,
  children,
  css,
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
      // @ts-ignore
      css={getBoxStyle(css)}
    >
      {children}
    </Box>
  </Box>
);

export default withRouter(Screen);
