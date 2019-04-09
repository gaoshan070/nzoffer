/* eslint-disable no-unused-vars */

const {
  caseHandlerMap,
} = require('./get-programme-pool.handleCases');
const {
  defaultResponse,
} = require('./get-programme-pool.handleCases.utils.js');
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

    if (caseNum === 0) {
      return defaultResponse;
    }

    const caseHandler = caseHandlerMap[caseNum];
    const result = await caseHandler(
      fullUser,
      this.app,
    );
    if (
      result.programmes &&
      result.programmes.length > 3
    ) {
      result.programmes.length = 3;
    }
    return result;
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
