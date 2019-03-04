import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import StartRegisterScreen from '../screens/StartRegisterScreen/StartRegisterScreen';
import { Step4SelectSchoolScreen } from '../screens/StartRegisterScreen/subRoutes/Step4SelectSchoolScreen/Step4SelectSchoolScreen';
import { PortalScreen } from '../screens/PortalScreen/PortalScreen';
import { Step5SelectionInfoScreen } from '../screens/StartRegisterScreen/subRoutes/Step5SelectionInfoScreen/Step5SelectionInfoScreen';
import { FinishApplicationScreen } from '../screens/PortalScreen/components/FinishApplicationScreen';
import { Step1BasicInfoScreen } from '../screens/StartRegisterScreen/subRoutes/Step1BasicInfoScreen/Step1BasicInfoScreen';
import { Step2ContactMethodsScreen } from '../screens/StartRegisterScreen/subRoutes/Step2ContactMethodsScreen/Step2ContactMethodsScreen';
import { Step3EducationBackgroundScreen } from '../screens/StartRegisterScreen/subRoutes/Step3EducationBackgroundScreen/Step3EducationBackgroundScreen';
import { AdminUniversitiesScreen } from '../screens/AdminScreen/subRoutes/AdminUniversities/AdminUniversities';
import { AdminLoginScreen } from '../screens/AdminScreen/AdminLoginScreen';
import { AdminUniversitiesNew } from '../screens/AdminScreen/subRoutes/AdminUniversitiesNew/AdminUniversitiesNew';
import { AdminNZStudyArea } from '../screens/AdminScreen/subRoutes/AdminNZStudyArea/AdminNZStudyArea';
import { AdminNZStudyAreaNew } from '../screens/AdminScreen/subRoutes/AdminNZStudyAreaNew/AdminNZStudyAreaNew';
import { AdminCNStudyAreaNew } from '../screens/AdminScreen/subRoutes/AdminCNStudyAreaNew/AdminCNStudyAreaNew';

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

  ADMIN_LOGIN: '/admin/login',

  ADMIN_NZ_STUDY_AREA: '/admin/nz-study-area',
  ADMIN_NZ_STUDY_AREA_NEW: '/admin/nz-study-area/new',
  ADMIN_CN_STUDY_AREA: '/admin/cn-study-area',
  ADMIN_CN_STUDY_AREA_NEW: '/admin/cn-study-area/new',
  ADMIN_UNIVERSITIES: '/admin/universities',
  ADMIN_UNIVERSITIES_NEW: '/admin/universities/new',
  ADMIN_LANGUAGES: '/admin/languages',
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
    component: PortalScreen,
    routes: [
      {
        path: ROUTES.FINISH_APPLICATION,
        component: FinishApplicationScreen,
      },
    ],
  },
  {
    path: ROUTES.ADMIN_LOGIN,
    component: AdminLoginScreen,
    routes: [
      {
        path: ROUTES.ADMIN_NZ_STUDY_AREA,
        component: AdminNZStudyArea,
      },
      {
        path: ROUTES.ADMIN_NZ_STUDY_AREA_NEW,
        component: AdminNZStudyAreaNew,
      },
      {
        path: ROUTES.ADMIN_CN_STUDY_AREA,
        component: AdminCNStudyArea,
      },
      {
        path: ROUTES.ADMIN_CN_STUDY_AREA_NEW,
        component: AdminCNStudyAreaNew,
      },
      {
        path: ROUTES.ADMIN_UNIVERSITIES,
        component: AdminUniversitiesScreen,
      },
      {
        path: ROUTES.ADMIN_UNIVERSITIES,
        component: AdminUniversitiesScreen,
      },
      {
        path: ROUTES.ADMIN_UNIVERSITIES_NEW,
        component: AdminUniversitiesNew,
      },
      {
        path: ROUTES.ADMIN_LANGUAGES,
        component: AdminUniversitiesScreen,
      },
    ],
  },
];
