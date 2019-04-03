// Initializes the `cnStudyArea` service on path `/api/cn-study-area`
const createService = require('feathers-mongoose');
const createModel = require('../../../models/cn-study-area.model');
const hooks = require('./cn-study-area.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use(
    '/api/cn-study-area',
    createService(options),
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('api/cn-study-area');

  service.hooks(hooks);
};
