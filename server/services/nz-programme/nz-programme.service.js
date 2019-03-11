// Initializes the `programme` service on path `/api/programme`
const createService = require('feathers-mongoose');
const createModel = require('../../models/nz-programme.model');
const hooks = require('./nz-programme.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/api/nz-programme', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/nz-programme');

  service.hooks(hooks);
};
