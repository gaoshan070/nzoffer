(function(exports) {
  const nameReg = /\W/;

  exports.nameCheck = {
    isNameValid: v => !nameReg.test(v),
  };
})(typeof exports === 'undefined' ? (this['nameCheck'] = {}) : exports);
