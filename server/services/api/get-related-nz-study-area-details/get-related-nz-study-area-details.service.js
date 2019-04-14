// Initializes the `api/get-related-nz-study-area-details` service on path `/api/get-related-nz-study-area-details`
const createService = require('./get-related-nz-study-area-details.class.js');
const hooks = require('./get-related-nz-study-area-details.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/get-related-nz-study-area-details', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/get-related-nz-study-area-details');

  service.hooks(hooks);
};
