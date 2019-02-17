const engWithSpaceReg = /^[A-Za-z\s]+$/;
const engOnlyReg = /^[A-Za-z]+$/;

module.exports = {
  isEngWithSpace: v => engWithSpaceReg.test(v),
  isEngOnly: v => engOnlyReg.test(v),
};
