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
