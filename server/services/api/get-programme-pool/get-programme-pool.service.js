// Initializes the `api/get-programme-pool` service on path `/api/get-programme-pool`
const createService = require('./get-programme-pool.class.js');
const hooks = require('./get-programme-pool.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/get-programme-pool', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/get-programme-pool');

  service.hooks(hooks);
};
