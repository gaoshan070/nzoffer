/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async create(data, params) {
    const { user } = params;
    debugger;
    const result = await this.app
      .service('api/programme')
      .find({
        query: {
          $populate: [
            'nzStudyArea',
            'nzStudyAreaDetail',
            'university',
          ],
        },
      });

    return result;
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
