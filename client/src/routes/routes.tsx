import React from 'react';
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

import ChatScreenStoreContextProvider from '../store/ChatScreenStore/ChatScreenStore.context';
import {
  IRouteConfig,
  routesConfig,
} from './routesConfig';

// This is for handling the bug from react-is
// after fixed, we don't need to use this work-around
const wrap = (
  Component: React.ComponentType<RouteComponentProps>,
) => (props: RouteComponentProps) => (
  <Component {...props} />
);

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const routeWithSubRoutes = (
  route: IRouteConfig,
): React.ReactElement<RouteComponentProps>[] => {
  const result: React.ReactElement<
    RouteComponentProps
  >[] = [];

  result.push(
    <Route
      exact
      key={route.path}
      path={route.path}
      component={wrap(route.component)}
    />,
  );

  if (route.routes) {
    route.routes.forEach(route => {
      result.push(
        <Route
          exact
          key={route.path}
          path={route.path}
          component={wrap(route.component)}
        />,
      );
    });
  }

  return result;
};

const Routes = () => (
  <ChatScreenStoreContextProvider>
    <BrowserRouter>
      <Switch>
        {routesConfig.map((route: IRouteConfig) => {
          return route.routes ? (
            routeWithSubRoutes(route)
          ) : (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={wrap(route.component)}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  </ChatScreenStoreContextProvider>
);

export default Routes;
