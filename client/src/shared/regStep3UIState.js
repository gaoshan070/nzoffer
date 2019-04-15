const { NO_ENG_SCORE_TEXT } = require('./sharedData');

const isNoEngTestScore = engTestScore => engTestScore === NO_ENG_SCORE_TEXT;

const uiState = {
  // 小六在读 / 初一在读 / 初二在读 / 初三在读 / 初中毕业 / 高一在读
  1: ['chinaDegree', 'cnHighSchoolName'],

  // 高一毕业 / 高二在读 / 高二毕业 / 高三在读
  2: ['chinaDegree', 'cnHighSchoolName', 'engTestName', 'engTestScore'],

  // 高三毕业
  3: [
    'chinaDegree',
    'cnHighSchoolName',
    'engTestName',
    'engTestScore',
    'haveGaoKaoScore',
    'gaoKaoScoreLevel',
    'nzStudyArea',
    'nzStudyAreaDetail',
  ],

  // 大一在读 / 大一毕业 / 大二在读 / 大二毕业 / 大三在读 / 大三毕业 / 大四在读 / 本科毕业 / 大专在读 / 大学肄业 / 研究生
  4: [
    'chinaDegree',
    'engTestName',
    'engTestScore',
    'isCN211Uni',
    'cn211UniName',
    'cnNormalUniName',
    'cnUniAverageScore',
    'nzStudyArea',
    'nzStudyAreaDetail',
    'cnStudyArea',
  ],

  // 大专毕业
  5: [
    'chinaDegree',
    'engTestName',
    'engTestScore',
    'isCN211Uni',
    'cn211UniName',
    'cnNormalUniName',
    'cnUniAverageScore',
    'nzStudyAreaDetail',
    'cnStudyArea',
    'hasWorkExperiences',
  ],

  // 国外学历:
  6: [
    'overseaUniNameEN',
    'overseaStudyAreaNameEN',
    'overseaUniAverageScore',
    'engTestName',
    'engTestScore',
    'nzStudyArea',
    'nzStudyAreaDetail',
  ],
};

const checkStep3Cases = {
  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase1: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
      return false;
    }

    return (
      chinaDegree === '小六在读' ||
      chinaDegree === '初一在读' ||
      chinaDegree === '初二在读' ||
      chinaDegree === '初三在读' ||
      chinaDegree === '初中毕业' ||
      chinaDegree === '高一在读'
    );
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase2: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
      return false;
    }

    return (
      chinaDegree === '高一毕业' ||
      chinaDegree === '高二在读' ||
      chinaDegree === '高二毕业' ||
      chinaDegree === '高三在读'
    );
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase3: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
      return false;
    }

    return chinaDegree === '高三毕业';
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase4: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
      return false;
    }

    return (
      chinaDegree === '大一在读' ||
      chinaDegree === '大一毕业' ||
      chinaDegree === '大二在读' ||
      chinaDegree === '大二毕业' ||
      chinaDegree === '大三在读' ||
      chinaDegree === '大三毕业' ||
      chinaDegree === '大四在读' ||
      chinaDegree === '本科毕业' ||
      chinaDegree === '大专在读' ||
      chinaDegree === '大学肄业' ||
      chinaDegree === '研究生'
    );
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase5: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
      return false;
    }

    return chinaDegree === '大专毕业';
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase6: (isDegreeGetInChina, chinaDegree) => {
    return !isDegreeGetInChina;
  },
};

/**
 * @param {Object} RegStore
 * @param {boolean} RegStore.isDegreeGetInChina
 * @param {string} RegStore.chinaDegree
 * @param {boolean} RegStore.isCN211Uni
 * @param {string} RegStore.cn211UniName
 * @param {string} RegStore.cnNormalUniName
 * @param {string} RegStore.cnUniAverageScore
 * @param {string} RegStore.engTestName
 * @param {string} RegStore.engTestScore
 * @param {string} RegStore.nzStudyArea
 * @param {string} RegStore.nzStudyAreaDetail
 * @param {string} RegStore.cnStudyArea
 * @param {string} RegStore.cnHighSchoolName
 * @param {boolean} RegStore.haveGaoKaoScore
 * @param {string} RegStore.gaoKaoScoreLevel
 * @param {string} RegStore.overseaUniNameEN
 * @param {string} RegStore.overseaStudyAreaNameEN
 * @param {string} RegStore.overseaUniAverageScore
 * @returns boolean
 */
const validateStep3 = ({
  isDegreeGetInChina,
  chinaDegree,
  isCN211Uni,
  cn211UniName,
  cnNormalUniName,
  cnUniAverageScore,
  engTestName,
  engTestScore,
  nzStudyArea,
  nzStudyAreaDetail,
  cnStudyArea,
  cnHighSchoolName,
  haveGaoKaoScore,
  gaoKaoScoreLevel,
  overseaUniNameEN,
  overseaStudyAreaNameEN,
  overseaUniAverageScore,
}) => {
  /** @type {boolean} */
  let isValid = false;

  if (checkStep3Cases.isCase1(isDegreeGetInChina, chinaDegree)) {
    isValid = !!(chinaDegree && cnHighSchoolName);
  } else if (checkStep3Cases.isCase2(isDegreeGetInChina, chinaDegree)) {
    if (engTestName === NO_ENG_SCORE_TEXT) {
      isValid = !!(chinaDegree && cnHighSchoolName && engTestName);
    } else {
      isValid = !!(
        chinaDegree &&
        cnHighSchoolName &&
        engTestName &&
        engTestScore
      );
    }
  } else if (checkStep3Cases.isCase3(isDegreeGetInChina, chinaDegree)) {
    isValid = !!(
      chinaDegree &&
      cnHighSchoolName &&
      nzStudyArea &&
      nzStudyAreaDetail
    );

    if (isValid) {
      if (haveGaoKaoScore) {
        isValid = !!(gaoKaoScoreLevel && gaoKaoScoreLevel !== '无成绩');
      } else {
        isValid = !!(gaoKaoScoreLevel && gaoKaoScoreLevel === '无成绩');
      }
    }

    if (isValid) {
      if (engTestName === NO_ENG_SCORE_TEXT) {
        isValid = engTestScore === '';
      } else {
        isValid = !!engTestScore;
      }
    }
  } else if (checkStep3Cases.isCase4(isDegreeGetInChina, chinaDegree)) {
    if (isCN211Uni) {
      isValid = !!(
        chinaDegree &&
        cn211UniName &&
        cnUniAverageScore &&
        nzStudyArea &&
        nzStudyAreaDetail &&
        cnStudyArea
      );
    } else {
      isValid = !!(
        chinaDegree &&
        cnNormalUniName &&
        cnUniAverageScore &&
        nzStudyArea &&
        nzStudyAreaDetail &&
        cnStudyArea
      );
    }

    if (isValid) {
      if (engTestName === NO_ENG_SCORE_TEXT) {
        isValid = engTestScore === '';
      } else {
        isValid = !!engTestScore;
      }
    }
  } else if (checkStep3Cases.isCase5(isDegreeGetInChina, chinaDegree)) {
    if (isCN211Uni) {
      isValid = !!(
        chinaDegree &&
        cn211UniName &&
        !cnNormalUniName &&
        cnUniAverageScore &&
        nzStudyArea &&
        nzStudyAreaDetail &&
        cnStudyArea
      );
    } else {
      isValid = !!(
        chinaDegree &&
        !cn211UniName &&
        cnNormalUniName &&
        cnUniAverageScore &&
        nzStudyArea &&
        nzStudyAreaDetail &&
        cnStudyArea
      );
    }

    if (isValid) {
      if (engTestName === NO_ENG_SCORE_TEXT) {
        isValid = engTestScore === '';
      } else {
        isValid = !!engTestScore;
      }
    }
  } else if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
    isValid = !!(
      !isDegreeGetInChina &&
      overseaUniNameEN &&
      overseaStudyAreaNameEN &&
      overseaUniAverageScore &&
      nzStudyArea &&
      nzStudyAreaDetail
    );

    if (isValid) {
      if (engTestName === NO_ENG_SCORE_TEXT) {
        isValid = engTestScore === '';
      } else {
        isValid = !!engTestScore;
      }
    }
  }

  return isValid;
};

/**
 * @param {boolean} isDegreeGetInChina
 * @param {string} chinaDegree
 * @returns 0|1|2|3|4|5
 */
const getCaseNum = (isDegreeGetInChina, chinaDegree) => {
  if (checkStep3Cases.isCase6(isDegreeGetInChina)) {
    return 6;
  }

  if (checkStep3Cases.isCase1(isDegreeGetInChina, chinaDegree)) {
    return 1;
  }

  if (checkStep3Cases.isCase2(isDegreeGetInChina, chinaDegree)) {
    return 2;
  }

  if (checkStep3Cases.isCase3(isDegreeGetInChina, chinaDegree)) {
    return 3;
  }

  if (checkStep3Cases.isCase4(isDegreeGetInChina, chinaDegree)) {
    return 4;
  }

  if (checkStep3Cases.isCase5(isDegreeGetInChina, chinaDegree)) {
    return 5;
  }

  return 0;
};

/**
 * @param {string[]} a1
 * @param {string[]} a2
 * @returns string[]
 */
const arrDiff = (a1, a2) => {
  const a = [];
  const diff = [];

  for (let i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }

  for (let i1 = 0; i1 < a2.length; i1++) {
    if (a[a2[i1]]) {
      delete a[a2[i1]];
    } else {
      a[a2[i1]] = true;
    }
  }

  for (let k in a) {
    diff.push(k);
  }

  return diff;
};

module.exports = {
  uiState,
  checkStep3Cases,
  validateStep3,
  getCaseNum,
  arrDiff,
  isNoEngTestScore,
};
