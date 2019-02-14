const nameReg = /\W/;

module.exports = {
  isNameValid: v => v !== '' && !nameReg.test(v),
};
