module.exports = {
  isChinese: v => {
    if (typeof v !== 'string' || v.length === 0) return false;
    let result = true;
    for (var i = 0; i < v.length; i++) {
      if (v.charCodeAt(i) <= 255) {
        result = false;
        break;
      }
    }
    return result;
  },
};
