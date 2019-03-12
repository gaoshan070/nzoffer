// eslint-disable-next-line no-useless-escape

// For checking: 12/31, 1/12, 3/1
const dateReg = /^([1-9]|[1][0-2])\/([1-9]|[1][0-9]|[2][0-9]|[3][0-1])$/;

const validFormatInfo =
  '信息格式有误，正确的格式为 ["12/15", "1/31"] 或 ["2/26"]，所有符号均为半角';

module.exports = {
  validFormatInfo,

  isValidApplicationDeadline: v => {
    if (typeof v !== 'string') {
      return {
        isValid: false,
        errMsg: '必须是字符串',
      };
    }

    if (!v.startsWith('[') || !v.endsWith(']')) {
      return {
        isValid: false,
        errMsg: '开头和结尾的字符有误，开头：[，结尾：]',
      };
    }

    if (v.includes('，')) {
      return {
        isValid: false,
        errMsg: '不可以使用中文逗号，请使用英文逗号',
      };
    }

    if (v.includes('“') || v.includes('”')) {
      return {
        isValid: false,
        errMsg: '不可以使用中文双引号，请使用英文双引号',
      };
    }

    if (v.includes("'")) {
      return {
        isValid: false,
        errMsg: '不可以使用单引号，请使用英文双引号',
      };
    }

    const values = `{ "data": ${v} }`;

    try {
      const parsed = JSON.parse(values);

      if (!Array.isArray(parsed.data)) {
        return {
          isValid: false,
          errMsg: validFormatInfo,
        };
      }

      const result = parsed.data.every(date => dateReg.test(date));

      return result
        ? {
            isValid: true,
            errMsg: '',
          }
        : {
            isValid: false,
            errMsg: validFormatInfo,
          };
    } catch {
      return {
        isValid: false,
        errMsg: validFormatInfo,
      };
    }
  },

  isValidDuration: v => /^\d*$/.test(v),
};
