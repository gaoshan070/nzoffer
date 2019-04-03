// Initializes the `api/select-school` service on path `/api/select-school`
const createService = require('./select-school.class.js');
const hooks = require('./select-school.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/select-school', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/select-school');

  service.hooks(hooks);
};
