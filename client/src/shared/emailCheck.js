(function(exports) {
  // eslint-disable-next-line no-useless-escape
  const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  exports.emailCheck = {
    isEmailValid: v => emailReg.test(v),
  };
})(typeof exports === 'undefined' ? (this['emailCheck'] = {}) : exports);
