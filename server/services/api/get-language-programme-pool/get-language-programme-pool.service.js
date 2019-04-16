// Initializes the `api/get-language-programme-pool` service on path `/api/get-language-programme-pool`
const createService = require('./get-language-programme-pool.class.js');
const hooks = require('./get-language-programme-pool.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/get-language-programme-pool', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/get-language-programme-pool');

  service.hooks(hooks);
};
