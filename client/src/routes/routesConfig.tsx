import { Pathname } from 'history';
import { RouteComponentProps } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import FinishRegisteringScreen from '../screens/FinishRegisteringScreen/FinishRegisteringScreen';
import StartRegisterScreen from '../screens/StartRegisterScreen/StartRegisterScreen';
import SelectSchoolScreen from '../screens/SelectSchoolScreen/SelectSchoolScreen';
import { PortalScreen } from '../screens/PortalScreen/PortalScreen';
import { SelectionInfoScreen } from '../screens/SelectionInfoScreen/SelectionInfoScreen';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',

  CHAT: '/chat',
  START_REGISTER: '/start-register',

  PORTAL: '/portal',
  FINISH_REGISTERING: '/portal/finish-registering',
  SELECT_SCHOOL: '/portal/school-select',
  SELECTION_INFO: '/portal/selection-info',
};

export interface IRouteConfig {
  path: string;
  component: React.ComponentType<any> | React.FC<any>;
  routes?: IRouteConfig[];
}

export const routesConfig: IRouteConfig[] = [
  {
    path: ROUTES.HOME,
    component: HomeScreen,
  },
  {
    path: ROUTES.LOGIN,
    component: LoginScreen,
  },
  {
    path: ROUTES.CHAT,
    component: ChatScreen,
  },
  {
    // TODO: Change it to StartRegistering
    path: ROUTES.START_REGISTER,
    component: StartRegisterScreen,
  },
  {
    path: ROUTES.PORTAL,
    component: PortalScreen,
    routes: [
      {
        path: ROUTES.FINISH_REGISTERING,
        component: FinishRegisteringScreen,
      },
      {
        path: ROUTES.SELECT_SCHOOL,
        component: SelectSchoolScreen,
      },
      {
        path: ROUTES.SELECTION_INFO,
        component: SelectionInfoScreen,
      },
    ],
  },
];
