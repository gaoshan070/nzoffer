const user = require('./user/user.service.js');
const phone = require('./phone/phone.service.js');
const checkPhone = require('./check-phone/check-phone.service.js');
const regFromChat = require('./reg-from-chat/reg-from-chat.service.js');
const university = require('./university/university.service.js');
const programme = require('./programme/programme.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(user);
  app.configure(phone);
  app.configure(checkPhone);
  app.configure(regFromChat);
  app.configure(university);
  app.configure(programme);
};
