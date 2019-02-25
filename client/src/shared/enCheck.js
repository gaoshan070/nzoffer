const engWithSpaceReg = /^[A-Za-z\s]+$/;
const engWithSpaceNumberReg = /^[A-Za-z0-9\s]+$/;
const engOnlyReg = /^[A-Za-z]+$/;

module.exports = {
  isEngWithSpace: v => engWithSpaceReg.test(v),
  isEngWithSpaceAndNumber: v => engWithSpaceNumberReg.test(v),
  isEngOnly: v => engOnlyReg.test(v),
};
