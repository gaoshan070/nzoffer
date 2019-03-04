// Initializes the `nzStudyAreaDetail` service on path `/api/nz-study-area-detail`
const createService = require('feathers-mongoose');
const createModel = require('../../models/nz-study-area-detail.model');
const hooks = require('./nz-study-area-detail.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/nz-study-area-detail', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/nz-study-area-detail');

  service.hooks(hooks);
};
