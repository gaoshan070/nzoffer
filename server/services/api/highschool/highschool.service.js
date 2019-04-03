// Initializes the `api/highschool` service on path `/api/highschool`
const createService = require('feathers-mongoose');
const createModel = require('../../../models/highschool.model');
const hooks = require('./highschool.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/highschool', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/highschool');

  service.hooks(hooks);
};
