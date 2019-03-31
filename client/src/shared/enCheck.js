const engWithSpaceReg = /^[A-Za-z\s]+$/;
const engWithSpaceNumberReg = /^[A-Za-z0-9\s]+$/;
const engWithSpaceNumberBracketsReg = /^[A-Za-z0-9()（）\s]+$/;
const engOnlyReg = /^[A-Za-z]+$/;

module.exports = {
  isEngWithSpace: v => engWithSpaceReg.test(v),
  isEngWithSpaceAndNumber: v => engWithSpaceNumberReg.test(v),
  isEngWithSpaceAndNumAndBrackets: v => engWithSpaceNumberBracketsReg.test(v),
  isEngOnly: v => engOnlyReg.test(v),
};
