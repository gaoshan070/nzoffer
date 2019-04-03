// Initializes the `check-phone` service on path `/api/check-phone`
const createService = require('./check-phone.class.js');
const hooks = require('./check-phone.hooks');

module.exports = function(app) {
  const paginate = app.get('paginate');

  const options = {
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/api/check-phone', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/check-phone');

  service.hooks(hooks);
};
