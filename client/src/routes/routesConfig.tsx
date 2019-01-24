import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import StartRegisterScreen from '../screens/StartRegisterScreen/StartRegisterScreen';
import SelectSchoolScreen from '../screens/StartRegisterScreen/subRoutes/SelectSchoolScreen/SelectSchoolScreen';
import { PortalScreen } from '../screens/PortalScreen/PortalScreen';
import { SelectionInfoScreen } from '../screens/StartRegisterScreen/subRoutes/SelectionInfoScreen/SelectionInfoScreen';
import { SelectionFinishedScreen } from '../screens/StartRegisterScreen/subRoutes/SelectionFinishedScreen/SelectionFinishedScreen';
import { BasicInfoScreen } from '../screens/StartRegisterScreen/subRoutes/BasicInfoScreen';
import { ContactMethodsScreen } from '../screens/StartRegisterScreen/subRoutes/ContactMethodsScreen';
import { EducationBackgroundScreen } from '../screens/StartRegisterScreen/subRoutes/EducationBackgroundScreen/EducationBackgroundScreen';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',

  CHAT: '/chat',

  START_REGISTER: '/reg/start-register',
  BASIC_INFO: '/reg/basic-info',
  CONTACT_METHODS: '/reg/contact-methods',
  EDUCATION_BACKGROUND: '/reg/education-background',
  SELECT_SCHOOL: '/reg/school-select',
  SELECTION_INFO: '/reg/selection-info',
  SELECTION_FINISHED: '/reg/selection-finished',

  PORTAL: '/portal',
};

export interface IRouteConfig {
  path: string;
  component: React.ComponentType<any>;
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
    path: ROUTES.START_REGISTER,
    component: StartRegisterScreen,
    routes: [
      {
        path: ROUTES.BASIC_INFO,
        component: BasicInfoScreen,
      },
      {
        path: ROUTES.CONTACT_METHODS,
        component: ContactMethodsScreen,
      },
      {
        path: ROUTES.EDUCATION_BACKGROUND,
        component: EducationBackgroundScreen,
      },
    ],
  },
  {
    path: ROUTES.PORTAL,
    component: PortalScreen,
    routes: [
      {
        path: ROUTES.SELECT_SCHOOL,
        component: SelectSchoolScreen,
      },
      {
        path: ROUTES.SELECTION_INFO,
        component: SelectionInfoScreen,
      },
      {
        path: ROUTES.SELECTION_FINISHED,
        component: SelectionFinishedScreen,
      },
    ],
  },
];
