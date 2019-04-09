/* eslint-disable no-unused-vars */

const {
  caseHandlerMap,
} = require('./get-programme-pool.handleCases');
const {
  getCaseNumByUser,
} = require('./get-programme-pool.cases');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find(params) {
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

    const caseNum = getCaseNumByUser(fullUser);
    const caseHandler = caseHandlerMap[caseNum];

    return caseHandler(fullUser, app);
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
