const errors = require('@feathersjs/errors');

exports.isValidationCodeRight = async context => {
  const result = await context.app
    .service('api/phone')
    .find({ query: { phone: context.data.phone } });

  if (result.total === 0) {
    throw new errors.BadRequest(
      '该手机号尚未发验证码',
    );
  }

  if (
    result.data[0].validationCode !==
    context.data.validationCode
  ) {
    throw new errors.BadRequest(
      '验证码不对，请仔细查看，或等有效期过后再发',
    );
  }
};

exports.isAlreadyRegistered = async context => {
  const result = await context.app
    .service('api/user')
    .find({ query: { phone: context.data.phone } });

  if (result.total > 0) {
    throw new errors.BadRequest(
      '该手机号已注册过啦，请登录',
    );
  }
};
