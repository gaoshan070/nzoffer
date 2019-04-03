// Initializes the `api/language-programme` service on path `/api/language-programme`
const createService = require('feathers-mongoose');
const createModel = require('../../../models/language-programme.model');
const hooks = require('./language-programme.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use(
    '/api/language-programme',
    createService(options),
  );

  // Get our initialized service so that we can register hooks
  const service = app.service(
    'api/language-programme',
  );

  service.hooks(hooks);
};
