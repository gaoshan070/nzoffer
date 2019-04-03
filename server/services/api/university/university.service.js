// Initializes the `university` service on path `/university`
const createService = require('feathers-mongoose');
const createModel = require('../../../models/university.model');
const hooks = require('./university.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/api/university', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/university');

  service.hooks(hooks);
};
