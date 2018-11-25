import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Screen from '../../components/Screen';

const LoginScreen: React.FC<
  RouteComponentProps
> = () => <Screen title="登录">Login Screen</Screen>;

export default LoginScreen;
