const {
  authenticate,
} = require('@feathersjs/authentication').hooks;
const {
  areFieldsExist,
} = require('../../../hooks/areFieldsExist');
const { populate } = require('feathers-hooks-common');

// populate({
//   schema: {
//     include: [
//       {
//         service: 'api/nz-study-area',
//         nameAs: 'nzStudyArea',
//         parentField: 'nzStudyArea',
//         childField: '_id',
//       },
//     ],
//   },
// }),

const requiredFields = {
  phone: true,
  email: true,
  password: true,
  shouldSendPartnerEmail: true,
};

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [areFieldsExist(requiredFields)],
    update: [areFieldsExist(requiredFields)],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
