const user = require('./user/user.service.js');
const phone = require('./phone/phone.service.js');
const checkPhone = require('./check-phone/check-phone.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(user);
  app.configure(phone);
  app.configure(checkPhone);
};
