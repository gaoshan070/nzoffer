/* eslint-disable no-unused-vars */

// TODO: If the phone number can be found in the  user table
// We should not send the sms

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async create(data, params) {
    const result = await this.app
      .service('api/phone')
      .create({
        validationCode: getRandom(
          10000,
          99999,
        ).toString(),
        phone: data.phone,
      });

    // TODO: send the SMS

    return {
      message: `验证码已经发送到 ${
        result.phone
      }, 5分钟之内有效`,
    };
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
