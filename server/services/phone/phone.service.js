// Initializes the `phone` service on path `/api/phone`
const createService = require('feathers-mongoose');
const createModel = require('../../models/phone.model');
const hooks = require('./phone.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/api/phone', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/phone');

  service.hooks(hooks);
};
