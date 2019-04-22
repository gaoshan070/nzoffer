import { lazy } from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import StartRegisterScreen from '../screens/StartRegisterScreen/StartRegisterScreen';
import { Step4SelectSchoolScreen } from '../screens/StartRegisterScreen/subRoutes/Step4SelectSchoolScreen/Step4SelectSchoolScreen';
import { Step5SelectionInfoScreen } from '../screens/StartRegisterScreen/subRoutes/Step5SelectionInfoScreen/Step5SelectionInfoScreen';
import { Step1BasicInfoScreen } from '../screens/StartRegisterScreen/subRoutes/Step1BasicInfoScreen/Step1BasicInfoScreen';
import { Step2ContactMethodsScreen } from '../screens/StartRegisterScreen/subRoutes/Step2ContactMethodsScreen/Step2ContactMethodsScreen';
import { Step3EducationBackgroundScreen } from '../screens/StartRegisterScreen/subRoutes/Step3EducationBackgroundScreen/Step3EducationBackgroundScreen';
import { ADMIN_ROUTES, adminRoutesConfig } from './routesConfig.admin';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',

  CHAT: '/chat',

  START_REGISTER: '/reg/start-register',
  BASIC_INFO: '/reg/step1-basic-info',
  CONTACT_METHODS: '/reg/step2-contact-methods',
  EDUCATION_BACKGROUND: '/reg/step3-education-background',
  SELECT_SCHOOL: '/reg/step4-school-select',
  SELECTION_INFO: '/reg/step5-selection-info',

  PORTAL: '/portal',
  FINISH_APPLICATION: '/portal/finish-application',

  ...ADMIN_ROUTES,
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
        component: Step1BasicInfoScreen,
      },
      {
        path: ROUTES.CONTACT_METHODS,
        component: Step2ContactMethodsScreen,
      },
      {
        path: ROUTES.EDUCATION_BACKGROUND,
        component: Step3EducationBackgroundScreen,
      },
      {
        path: ROUTES.SELECT_SCHOOL,
        component: Step4SelectSchoolScreen,
      },
      {
        path: ROUTES.SELECTION_INFO,
        component: Step5SelectionInfoScreen,
      },
    ],
  },
  {
    path: ROUTES.PORTAL,
    component: lazy(() =>
      import(
        /* webpackChunkName: "portalScreen" */ '../screens/PortalScreen/PortalScreen'
      ),
    ),
    routes: [
      {
        path: ROUTES.FINISH_APPLICATION,
        component: lazy(() =>
          import(
            /* webpackChunkName: "finishApplicationScreen" */ '../screens/PortalScreen/components/FinishApplicationScreen'
          ),
        ),
      },
    ],
  },
  ...adminRoutesConfig,
];
