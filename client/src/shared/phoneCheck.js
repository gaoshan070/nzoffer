// eslint-disable-next-line no-useless-escape
const phoneReg = /^\d{11}$/;

module.exports = {
  isPhoneValid: v => phoneReg.test(v),
};
