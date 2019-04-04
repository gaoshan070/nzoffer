const user = require('./api/user/user.service.js');
const phone = require('./api/phone/phone.service.js');
const checkPhone = require('./api/check-phone/check-phone.service.js');
const regFromChat = require('./api/reg-from-chat/reg-from-chat.service.js');
const university = require('./api/university/university.service.js');
const programme = require('./api/programme/programme.service.js');
const nzStudyArea = require('./api/nz-study-area/nz-study-area.service.js');
const nzStudyAreaDetail = require('./api/nz-study-area-detail/nz-study-area-detail.service.js');
const cnStudyArea = require('./api/cn-study-area/cn-study-area.service.js');
const languageProgramme = require('./api/language-programme/language-programme.service.js');
const apiSelectSchool = require('./api/select-school/select-school.service.js');
const apiHighschool = require('./api/highschool/highschool.service.js');
const apiPartner = require('./api/partner/partner.service.js');

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
  app.configure(apiHighschool);
  app.configure(apiPartner);
};
