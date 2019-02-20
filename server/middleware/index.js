const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.get('*', (req, res, next) => {
    const dir = app.get('public');

    const shouldServerHandle = req.path.startsWith(
      '/api',
    );

    if (shouldServerHandle) {
      next();
    } else {
      res.sendFile(path.join(dir + '/index.html'));
    }
  });
};
