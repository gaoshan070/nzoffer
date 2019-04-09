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

    const fullUser = await this.app
      .service('api/user')
      .get(user._id, {
        query: {
          $populate: [
            'nzStudyArea',
            'nzStudyAreaDetail',
            'cnStudyArea',
          ],
        },
      });

    debugger;
    const result = await this.app
      .service('api/nz-study-area')
      // .service('api/programme')
      .find({
        query: {
          // $populate: [
          //   'nzStudyArea',
          //   'nzStudyAreaDetail',
          //   'cnStudyArea',
          //   'university',
          // ],
        },
      });

    return result;
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
