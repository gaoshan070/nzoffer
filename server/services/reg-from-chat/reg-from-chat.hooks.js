const {
  areFieldsExist,
} = require('../../hooks/areFieldsExist');
const { keep } = require('feathers-hooks-common');

const requiredFields = {
  'province.name': true,
  'province.id': true,
  isDegreeGetInChina: true,
  expectedNZDegree: true,
  studyArea: true,
  chinaDegree: true,
  'overseaDegree.country': true,
  'overseaDegree.degree': true,
  'whenComeNZ.year': true,
  'whenComeNZ.month': true,
  phone: true,
  validationCode: true,
  password: true,
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      areFieldsExist(requiredFields),
      keep(...Object.keys(requiredFields)),
    ],
    update: [],
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
