import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import FinalRegisterScreen from '../screens/FinalRegisterScreen/FinalRegisterScreen';
import ChatScreenStoreContextProvider from '../store/ChatScreenStore/ChatScreenStore.context';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CHAT: '/chat',
  FINAL_REGISTER: '/final-register',
};

// This is for handling the bug from react-is
// after fixed, we don't need to use this work-around
const wrap = (
  Component: React.ComponentType<RouteComponentProps>,
) => (props: RouteComponentProps) => (
  <Component {...props} />
);

const Routes = () => (
  <ChatScreenStoreContextProvider>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={ROUTES.HOME}
          component={wrap(HomeScreen)}
        />
        <Route
          path={ROUTES.LOGIN}
          component={wrap(LoginScreen)}
        />
        <Route
          path={ROUTES.CHAT}
          component={wrap(ChatScreen)}
        />
        <Route
          path={ROUTES.FINAL_REGISTER}
          component={wrap(FinalRegisterScreen)}
        />
        <Route path="*" component={wrap(HomeScreen)} />
      </Switch>
    </BrowserRouter>
  </ChatScreenStoreContextProvider>
);

export default Routes;
