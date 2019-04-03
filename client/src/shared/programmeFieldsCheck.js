// eslint-disable-next-line no-useless-escape

// For checking: 31/12, 12/1, 1/3
const dateReg = /^([1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([1-9]|[1][0-2])$/;

const validApplicationDeadlineFormatInfo =
  '格式有误，正确的格式为 15/12, 31/1 或 26/2，所有符号均为半角，且日期在正确范围';

const validDurationFormatInfo =
  '格式有误，正确的格式为 1 或 3, 6, 月份范围：1～12';

function validateStringIsArray(v) {
  if (typeof v !== 'string') {
    return {
      isValid: false,
      errMsg: '必须是字符串',
    };
  }

  if (v.includes('，')) {
    return {
      isValid: false,
      errMsg: '不可以使用中文逗号，请使用英文逗号',
    };
  }

  return {
    isValid: true,
    errMsg: '',
  };
}

function deepValidateStringIsArray(v, errMsg, checkItemFunc) {
  const parsed = v.replace(/\s/g, '').split(',');

  if (!Array.isArray(parsed)) {
    return {
      isValid: false,
      errMsg,
    };
  }

  const result = parsed.every(checkItemFunc);

  return result
    ? {
        isValid: true,
        errMsg: '',
      }
    : {
        isValid: false,
        errMsg,
      };
}

module.exports = {
  dateReg,
  validFormatInfo: validApplicationDeadlineFormatInfo,
  validDurationFormatInfo,
  isValidApplicationDeadline: v => {
    const firstCheck = validateStringIsArray(v);

    if (!firstCheck.isValid) return firstCheck;

    return deepValidateStringIsArray(
      v,
      validApplicationDeadlineFormatInfo,
      date => dateReg.test(date),
    );
  },

  isValidDuration: v => /^\d*$/.test(v),

  isValidStartMonth: v => {
    const firstCheck = validateStringIsArray(v, true);

    if (!firstCheck.isValid) return firstCheck;

    return deepValidateStringIsArray(
      v,
      validDurationFormatInfo,
      month =>
        !isNaN(month) && parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12,
    );
  },

  isValidStringArray: v => {
    const firstCheck = validateStringIsArray(v, true);

    if (!firstCheck.isValid) return firstCheck;

    return deepValidateStringIsArray(
      v,
      '格式有误，请用逗号隔开文件名',
      v => v !== '',
    );
  },

  isValidNumberArray: arr => {
    const firstCheck = Array.isArray(arr);

    if (!firstCheck) return firstCheck;

    return arr.every(item => !isNaN(item));
  },

  isValidTuitionFee: v => /^\d+$/.test(v),
};
