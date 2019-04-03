// Initializes the `api/partner` service on path `/api/partner`
const createService = require('feathers-mongoose');
const createModel = require('../../../models/partner.model');
const hooks = require('./partner.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/partner', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/partner');

  service.hooks(hooks);
};
