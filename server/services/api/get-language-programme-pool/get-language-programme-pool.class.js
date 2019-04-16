/* eslint-disable no-unused-vars */
const {
  getLanguageProgramme,
} = require('./get-language-programme-pool.utils');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find(params) {
    const { user } = params;
    const result = await getLanguageProgramme({
      user,
      languageProgrammeService: this.app.service(
        'api/language-programme',
      ),
    });

    return result;
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
