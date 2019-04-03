const { disallow } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [disallow('external')],
    find: [],
    get: [],
    create: [],
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
    create: [
      context => {
        if (
          context.error &&
          context.error.className === 'conflict' &&
          context.error.message.endsWith(
            'already exists.',
          )
        ) {
          context.error.message =
            '原验证码尚未过期，不能重发哦，请稍候再试';
        }
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },
};
