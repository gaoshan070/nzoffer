const user = require('./user/user.service.js');
const phone = require('./phone/phone.service.js');
const checkPhone = require('./check-phone/check-phone.service.js');
const regFromChat = require('./reg-from-chat/reg-from-chat.service.js');
const university = require('./university/university.service.js');
const programme = require('./programme/programme.service.js');
const nzStudyArea = require('./nz-study-area/nz-study-area.service.js');
const nzStudyAreaDetail = require('./nz-study-area-detail/nz-study-area-detail.service.js');
const cnStudyArea = require('./cn-study-area/cn-study-area.service.js');
const languageProgramme = require('./language-programme/language-programme.service.js');
const apiSelectSchool = require('./api/select-school/select-school.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(user);
  app.configure(phone);
  app.configure(checkPhone);
  app.configure(regFromChat);
  app.configure(university);
  app.configure(programme);
  app.configure(nzStudyArea);
  app.configure(nzStudyAreaDetail);
  app.configure(cnStudyArea);
  app.configure(languageProgramme);
  app.configure(apiSelectSchool);
};
