/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async create(data, params) {
    const result = await this.app
      .service('api/user')
      .create(data);

    return result;
  }

  async patch(id, data, params) {}
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
