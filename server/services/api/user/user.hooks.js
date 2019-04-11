const {
  authenticate,
} = require('@feathersjs/authentication').hooks;
const {
  populate,
  disallow,
} = require('feathers-hooks-common');

const {
  hashPassword,
  protect,
} = require('@feathersjs/authentication-local').hooks;

const populateFields = {
  nzStudyArea: {
    service: 'api/nz-study-area',
    nameAs: 'nzStudyArea',
    parentField: 'nzStudyArea',
    childField: '_id',
  },
  nzStudyAreaDetail: {
    service: 'api/nz-study-area-detail',
    nameAs: 'nzStudyAreaDetail',
    parentField: 'nzStudyAreaDetail',
    childField: '_id',
  },
  cnStudyArea: {
    service: 'api/cn-study-area',
    nameAs: 'cnStudyArea',
    parentField: 'cnStudyArea',
    childField: '_id',
  },
  getUniversity: (key = 'university') => ({
    service: 'api/university',
    nameAs: key,
    parentField: key,
    childField: '_id',
  }),
};

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [disallow('external'), hashPassword()],
    update: [hashPassword(), authenticate('jwt')],
    patch: [hashPassword(), authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password'),

      populate({
        schema: {
          include: [
            populateFields.nzStudyArea,
            populateFields.nzStudyAreaDetail,
            populateFields.cnStudyArea,
            {
              service: 'api/programme',
              nameAs: 'selected.programme.info',
              parentField: 'selected.programme.info',
              childField: '_id',
              include: [
                populateFields.getUniversity(),
              ],
            },
            {
              service: 'api/language-programme',
              nameAs:
                'selected.languageProgramme.info',
              parentField:
                'selected.languageProgramme.info',
              childField: '_id',
            },
            {
              service: 'api/highschool',
              nameAs: 'selected.highschool.info',
              parentField: 'selected.highschool.info',
              childField: '_id',
            },
          ],
        },
      }),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
