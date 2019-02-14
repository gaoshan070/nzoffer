const birthReg = /(19|20)\d\d\/\d\d\/[0,1,2,3]\d/;

const getDateObj = value => {
  const len = value.length;

  return {
    year: len > 4 ? value.substring(0, 4) : '',
    month: len >= 7 ? value.substring(5, 7) : '',
    day: len >= 10 ? value.substring(8, 10) : '',
  };
};

const validDateStr = str => {
  if (!birthReg.test(str)) {
    return {
      error: true,
      errMsg: '正确的格式是 2000/08/18',
    };
  }
  const dateObj = getDateObj(str);

  const yearInt = parseInt(dateObj.year, 10);
  const currentYear = new Date().getFullYear();
  if (currentYear - yearInt > 50) {
    return {
      error: true,
      errMsg: `出生年份过大，看仔细哦 🙏`,
    };
  } else if (currentYear - yearInt < 5) {
    return {
      error: true,
      errMsg: `出生年份过小，看仔细哦 🙏`,
    };
  }

  const monthInt = parseInt(dateObj.month, 10);
  if (monthInt > 12 || monthInt === 0) {
    return {
      error: true,
      errMsg: `月:${monthInt} 有误，看仔细哦 🙏`,
    };
  }

  const dayInt = parseInt(dateObj.day, 10);
  if (dayInt > 31 || dayInt === 0) {
    return {
      error: true,
      errMsg: `日:${dayInt} 有误，看仔细哦 🙏`,
    };
  }

  return {
    error: false,
    errMsg: '',
  };
};

module.exports = {
  getDateObj,
  validDateStr,
};
