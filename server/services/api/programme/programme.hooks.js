const {
  authenticate,
} = require('@feathersjs/authentication').hooks;
const { populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [
      populate({
        schema: {
          include: [
            {
              service: 'api/nz-study-area',
              nameAs: 'nzStudyArea',
              parentField: 'nzStudyArea',
              childField: '_id',
            },
            {
              service: 'api/nz-study-area-detail',
              nameAs: 'nzStudyAreaDetail',
              parentField: 'nzStudyAreaDetail',
              childField: '_id',
            },
            {
              service: 'api/cn-study-area',
              nameAs: 'cnStudyArea',
              parentField: 'cnStudyArea',
              childField: '_id',
            },
            {
              service: 'api/university',
              nameAs: 'university',
              parentField: 'university',
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
