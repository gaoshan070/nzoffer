import { lazy } from 'react';
import { AdminUniversities } from '../screens/AdminScreen/subRoutes/AdminUniversities/AdminUniversities';
import AdminLoginScreen from '../screens/AdminScreen/AdminLoginScreen';
import { AdminUniversitiesNew } from '../screens/AdminScreen/subRoutes/AdminUniversities/AdminUniversitiesNew';
import { AdminNZStudyArea } from '../screens/AdminScreen/subRoutes/AdminNZStudyArea/AdminNZStudyArea';
import { AdminNZStudyAreaNew } from '../screens/AdminScreen/subRoutes/AdminNZStudyArea/AdminNZStudyAreaNew';
import { AdminNZStudyAreaDetail } from '../screens/AdminScreen/subRoutes/AdminNZStudyAreaDetail/AdminNZStudyAreaDetail';
import { AdminNZStudyAreaDetailNew } from '../screens/AdminScreen/subRoutes/AdminNZStudyAreaDetail/AdminNZStudyAreaDetailNew';
import { AdminCNStudyArea } from '../screens/AdminScreen/subRoutes/AdminCNStudyArea/AdminCNStudyArea';
import { AdminCNStudyAreaNew } from '../screens/AdminScreen/subRoutes/AdminCNStudyArea/AdminCNStudyAreaNew';
import { AdminProgramme } from '../screens/AdminScreen/subRoutes/AdminProgramme/AdminProgramme';
import { AdminProgrammeNew } from '../screens/AdminScreen/subRoutes/AdminProgramme/AdminProgrammeNew';
import { AdminLanguage } from '../screens/AdminScreen/subRoutes/AdminLanguage/AdminLanguage';
import { AdminLanguageNew } from '../screens/AdminScreen/subRoutes/AdminLanguage/AdminLanguageNew';
import { AdminHighschool } from '../screens/AdminScreen/subRoutes/AdminHighschool/AdminHighschool';
import { AdminHighschoolNew } from '../screens/AdminScreen/subRoutes/AdminHighschool/AdminHighschoolNew';
import { AdminPartners } from '../screens/AdminScreen/subRoutes/AdminPartners/AdminPartners';
import { AdminPartnersNew } from '../screens/AdminScreen/subRoutes/AdminPartners/AdminPartnersNew';
import { IRouteConfig } from './routesConfig';

export const ADMIN_ROUTES = {
  ADMIN_LOGIN: '/admin/login',

  ADMIN_NZ_STUDY_AREA: '/admin/nz-study-area',
  ADMIN_NZ_STUDY_AREA_NEW: '/admin/nz-study-area/new',
  ADMIN_NZ_STUDY_AREA_EDIT: '/admin/nz-study-area/edit/:id',

  ADMIN_NZ_STUDY_AREA_DETAIL: '/admin/nz-study-area-detail',
  ADMIN_NZ_STUDY_AREA_DETAIL_NEW: '/admin/nz-study-area-detail/new',
  ADMIN_NZ_STUDY_AREA_DETAIL_EDIT: '/admin/nz-study-area-detail/edit/:id',

  ADMIN_CN_STUDY_AREA: '/admin/cn-study-area',
  ADMIN_CN_STUDY_AREA_NEW: '/admin/cn-study-area/new',
  ADMIN_CN_STUDY_AREA_EDIT: '/admin/cn-study-area/edit/:id',

  ADMIN_UNIVERSITIES: '/admin/universities',
  ADMIN_UNIVERSITIES_NEW: '/admin/universities/new',
  ADMIN_UNIVERSITIES_EDIT: '/admin/universities/edit/:id',

  ADMIN_PROGRAMME: '/admin/programme',
  ADMIN_PROGRAMME_NEW: '/admin/programme/new',
  ADMIN_PROGRAMME_EDIT: '/admin/programme/edit/:id',

  ADMIN_LANGUAGES: '/admin/languages',
  ADMIN_LANGUAGES_NEW: '/admin/languages/new',
  ADMIN_LANGUAGES_EDIT: '/admin/languages/edit/:id',

  ADMIN_HIGHSCHOOL: '/admin/highschool',
  ADMIN_HIGHSCHOOL_NEW: '/admin/highschool/new',
  ADMIN_HIGHSCHOOL_EDIT: '/admin/highschool/edit/:id',

  ADMIN_PARTNER: '/admin/partner',
  ADMIN_PARTNER_NEW: '/admin/partner/new',
  ADMIN_PARTNER_EDIT: '/admin/partner/edit/:id',
};

export const adminRoutesConfig: IRouteConfig[] = [
  {
    path: ADMIN_ROUTES.ADMIN_LOGIN,
    component: lazy(() =>
      import(
        /* webpackChunkName: "adminLogin" */ '../screens/AdminScreen/AdminLoginScreen'
      ),
    ),
    routes: [
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA,
        component: AdminNZStudyArea,
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_NEW,
        component: AdminNZStudyAreaNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_EDIT,
        component: AdminNZStudyAreaNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL,
        component: AdminNZStudyAreaDetail,
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL_NEW,
        component: AdminNZStudyAreaDetailNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL_EDIT,
        component: AdminNZStudyAreaDetailNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_CN_STUDY_AREA,
        component: AdminCNStudyArea,
      },
      {
        path: ADMIN_ROUTES.ADMIN_CN_STUDY_AREA_NEW,
        component: AdminCNStudyAreaNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_CN_STUDY_AREA_EDIT,
        component: AdminCNStudyAreaNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_UNIVERSITIES,
        component: AdminUniversities,
      },
      {
        path: ADMIN_ROUTES.ADMIN_UNIVERSITIES_NEW,
        component: AdminUniversitiesNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_UNIVERSITIES_EDIT,
        component: AdminUniversitiesNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_PROGRAMME,
        component: AdminProgramme,
      },
      {
        path: ADMIN_ROUTES.ADMIN_PROGRAMME_NEW,
        component: AdminProgrammeNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_PROGRAMME_EDIT,
        component: AdminProgrammeNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_LANGUAGES,
        component: AdminLanguage,
      },
      {
        path: ADMIN_ROUTES.ADMIN_LANGUAGES_NEW,
        component: AdminLanguageNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_LANGUAGES_EDIT,
        component: AdminLanguageNew,
      },

      {
        path: ADMIN_ROUTES.ADMIN_HIGHSCHOOL,
        component: AdminHighschool,
      },
      {
        path: ADMIN_ROUTES.ADMIN_HIGHSCHOOL_NEW,
        component: AdminHighschoolNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_HIGHSCHOOL_EDIT,
        component: AdminHighschoolNew,
      },

      {
        path: ADMIN_ROUTES.ADMIN_PARTNER,
        component: AdminPartners,
      },
      {
        path: ADMIN_ROUTES.ADMIN_PARTNER_NEW,
        component: AdminPartnersNew,
      },
      {
        path: ADMIN_ROUTES.ADMIN_PARTNER_EDIT,
        component: AdminPartnersNew,
      },
    ],
  },
];
