const { keep } = require('feathers-hooks-common');
const {
  areFieldsExist,
} = require('../../hooks/areFieldsExist');
const { validate } = require('feathers-hooks-common');

function isPhoneValid() {
  return validate(formValues =>
    /^\d{11}$/.test(formValues.phone)
      ? null
      : { phone: '请输入格式正确的手机号' },
  );
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      areFieldsExist({
        fieldNames: ['phone'],
        nameInErrorMsg: { phone: '手机号' },
      }),
      keep('phone'),
      isPhoneValid(),
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
