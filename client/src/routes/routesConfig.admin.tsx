import { lazy } from 'react';
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
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminNZStudyArea" */ '../screens/AdminScreen/subRoutes/AdminNZStudyArea/AdminNZStudyArea'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminNZStudyAreaNew" */ '../screens/AdminScreen/subRoutes/AdminNZStudyArea/AdminNZStudyAreaNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminNZStudyAreaNew" */ '../screens/AdminScreen/subRoutes/AdminNZStudyArea/AdminNZStudyAreaNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminNZStudyAreaDetail" */ '../screens/AdminScreen/subRoutes/AdminNZStudyAreaDetail/AdminNZStudyAreaDetail'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminNZStudyAreaDetailNew" */ '../screens/AdminScreen/subRoutes/AdminNZStudyAreaDetail/AdminNZStudyAreaDetailNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminNZStudyAreaDetailNew" */ '../screens/AdminScreen/subRoutes/AdminNZStudyAreaDetail/AdminNZStudyAreaDetailNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_CN_STUDY_AREA,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminCNStudyArea" */ '../screens/AdminScreen/subRoutes/AdminCNStudyArea/AdminCNStudyArea'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_CN_STUDY_AREA_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminCNStudyAreaNew" */ '../screens/AdminScreen/subRoutes/AdminCNStudyArea/AdminCNStudyAreaNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_CN_STUDY_AREA_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminCNStudyAreaNew" */ '../screens/AdminScreen/subRoutes/AdminCNStudyArea/AdminCNStudyAreaNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_UNIVERSITIES,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminUniversities" */ '../screens/AdminScreen/subRoutes/AdminUniversities/AdminUniversities'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_UNIVERSITIES_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminUniversitiesNew" */ '../screens/AdminScreen/subRoutes/AdminUniversities/AdminUniversitiesNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_UNIVERSITIES_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminUniversitiesNew" */ '../screens/AdminScreen/subRoutes/AdminUniversities/AdminUniversitiesNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_PROGRAMME,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminProgramme" */ '../screens/AdminScreen/subRoutes/AdminProgramme/AdminProgramme'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_PROGRAMME_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminProgrammeNew" */ '../screens/AdminScreen/subRoutes/AdminProgramme/AdminProgrammeNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_PROGRAMME_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminProgrammeNew" */ '../screens/AdminScreen/subRoutes/AdminProgramme/AdminProgrammeNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_LANGUAGES,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminLanguage" */ '../screens/AdminScreen/subRoutes/AdminLanguage/AdminLanguage'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_LANGUAGES_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminLanguageNew" */ '../screens/AdminScreen/subRoutes/AdminLanguage/AdminLanguageNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_LANGUAGES_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminLanguageNew" */ '../screens/AdminScreen/subRoutes/AdminLanguage/AdminLanguageNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_HIGHSCHOOL,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminHighschool" */ '../screens/AdminScreen/subRoutes/AdminHighschool/AdminHighschool'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_HIGHSCHOOL_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminHighschoolNew" */ '../screens/AdminScreen/subRoutes/AdminHighschool/AdminHighschoolNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_HIGHSCHOOL_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminHighschoolNew" */ '../screens/AdminScreen/subRoutes/AdminHighschool/AdminHighschoolNew'
          ),
        ),
      },

      {
        path: ADMIN_ROUTES.ADMIN_PARTNER,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminPartners" */ '../screens/AdminScreen/subRoutes/AdminPartners/AdminPartners'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_PARTNER_NEW,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminPartnersNew" */ '../screens/AdminScreen/subRoutes/AdminPartners/AdminPartnersNew'
          ),
        ),
      },
      {
        path: ADMIN_ROUTES.ADMIN_PARTNER_EDIT,
        component: lazy(() =>
          import(
            /* webpackChunkName: "adminPartnersNew" */ '../screens/AdminScreen/subRoutes/AdminPartners/AdminPartnersNew'
          ),
        ),
      },
    ],
  },
];
