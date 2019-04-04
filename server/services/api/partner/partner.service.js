// Initializes the `api/partner` service on path `/api/partner`
const createService = require('./partner.class.js');
const hooks = require('./partner.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/partner', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/partner');

  service.hooks(hooks);
};
