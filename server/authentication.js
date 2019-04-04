const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');

module.exports = function(app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('api/authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(
          config.strategies,
        ),

        // Add isAdmin and isPartner to JWT
        context => {
          // make sure params.payload exists
          context.params.payload =
            context.params.payload || {};

          const {
            isAdmin,
            isPartner,
          } = context.params.user;

          Object.assign(context.params.payload, {
            isAdmin,
            isPartner,
          });
        },
      ],
      remove: [
        authentication.hooks.authenticate('jwt'),
      ],
    },
  });
};
