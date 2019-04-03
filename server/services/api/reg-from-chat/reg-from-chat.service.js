// Initializes the `regFromChat` service on path `/api/reg-from-chat`
const createService = require('./reg-from-chat.class.js');
const hooks = require('./reg-from-chat.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/reg-from-chat', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/reg-from-chat');

  service.hooks(hooks);
};
