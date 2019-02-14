const uiState = {
  // 大三/大四/本科毕业
  case1: [
    'chinaDegree',
    'isCN211Uni',
    'cn211UniName',
    'cnNormalUniName',
    'cnUniAverageScore',
    'engTestName',
    'engTestScore',
    'nzStudyArea',
    'nzStudyAreaDetail',
    'cnStudyArea',
  ],

  // 大一/大二/大专/大学肄业
  case2: [
    'chinaDegree',
    'isCN211Uni',
    'cn211UniName',
    'cnNormalUniName',
    'cnUniAverageScore',
    'engTestName',
    'engTestScore',
    'nzStudyArea',
    'nzStudyAreaDetail',
  ],

  // 初中/高中
  case3: ['chinaDegree', 'cnHighSchoolName', 'engTestName', 'engTestScore'],

  // 高三毕业
  case4: [
    'chinaDegree',
    'haveGaoKaoScore',
    'gaoKaoScoreLevel',
    'cnHighSchoolName',
    'engTestName',
    'engTestScore',
    'nzStudyArea',
    'nzStudyAreaDetail',
  ],

  // 国外学历:
  case5: [
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
    if (checkStep3Cases.isCase5(isDegreeGetInChina)) {
      return false;
    }

    return (
      chinaDegree === '大三在读' ||
      chinaDegree === '大四在读' ||
      chinaDegree === '本科毕业/有学位' ||
      chinaDegree === '本科毕业/无学位' ||
      chinaDegree === '研究生'
    );
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase2: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase5(isDegreeGetInChina)) {
      return false;
    }

    return (
      chinaDegree === '大专毕业' ||
      chinaDegree === '大一在读' ||
      chinaDegree === '大一毕业/大二在读' ||
      chinaDegree === '大二毕业/大专在读' ||
      chinaDegree === '大学肄业'
    );
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase3: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase5(isDegreeGetInChina)) {
      return false;
    }

    return (
      chinaDegree === '初一年级' ||
      chinaDegree === '初二年级' ||
      chinaDegree === '初三年级' ||
      chinaDegree === '初中毕业' ||
      chinaDegree === '初中肄业' ||
      chinaDegree === '高一在读' ||
      chinaDegree === '高一毕业/高二在读' ||
      chinaDegree === '高二毕业/高三在读'
    );
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @param {string} chinaDegree
   * @returns boolean
   */
  isCase4: (isDegreeGetInChina, chinaDegree) => {
    if (checkStep3Cases.isCase5(isDegreeGetInChina)) {
      return false;
    }

    return chinaDegree === '高三毕业';
  },

  /**
   * @param {boolean} isDegreeGetInChina
   * @returns boolean
   */
  isCase5: isDegreeGetInChina => isDegreeGetInChina,
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
  let isValid = false;
  if (checkStep3Cases.isCase1(isDegreeGetInChina, chinaDegree)) {
    if (isCN211Uni) {
      isValid = !!(
        chinaDegree &&
        isCN211Uni &&
        cn211UniName &&
        !cnNormalUniName &&
        cnUniAverageScore &&
        engTestName &&
        engTestScore &&
        nzStudyArea &&
        nzStudyAreaDetail &&
        cnStudyArea
      );
    } else {
      isValid = !!(
        chinaDegree &&
        !isCN211Uni &&
        !cn211UniName &&
        cnNormalUniName &&
        cnUniAverageScore &&
        engTestName &&
        engTestScore &&
        nzStudyArea &&
        nzStudyAreaDetail &&
        cnStudyArea
      );
    }
  } else if (checkStep3Cases.isCase2(isDegreeGetInChina, chinaDegree)) {
    if (isCN211Uni) {
      isValid = !!(
        chinaDegree &&
        isCN211Uni &&
        cn211UniName &&
        !cnNormalUniName &&
        cnUniAverageScore &&
        engTestName &&
        engTestScore &&
        nzStudyArea &&
        nzStudyAreaDetail
      );
    } else {
      isValid = !!(
        chinaDegree &&
        !isCN211Uni &&
        !cn211UniName &&
        cnNormalUniName &&
        cnUniAverageScore &&
        engTestName &&
        engTestScore &&
        nzStudyArea &&
        nzStudyAreaDetail
      );
    }
  } else if (checkStep3Cases.isCase3(isDegreeGetInChina, chinaDegree)) {
    isValid = !!(
      chinaDegree &&
      cnHighSchoolName &&
      engTestName &&
      engTestScore
    );
  } else if (checkStep3Cases.isCase4(isDegreeGetInChina, chinaDegree)) {
    if (haveGaoKaoScore) {
      isValid = !!(
        chinaDegree &&
        haveGaoKaoScore &&
        gaoKaoScoreLevel &&
        cnHighSchoolName &&
        engTestName &&
        engTestScore &&
        nzStudyArea &&
        nzStudyAreaDetail
      );
    } else {
      isValid = !!(
        chinaDegree &&
        !haveGaoKaoScore &&
        !gaoKaoScoreLevel &&
        cnHighSchoolName &&
        engTestName &&
        engTestScore &&
        nzStudyArea &&
        nzStudyAreaDetail
      );
    }
  } else if (checkStep3Cases.isCase5(isDegreeGetInChina)) {
    isValid = !!(
      overseaUniNameEN &&
      overseaStudyAreaNameEN &&
      overseaUniAverageScore &&
      engTestName &&
      engTestScore &&
      nzStudyArea &&
      nzStudyAreaDetail
    );
  }
  return isValid;
};

/**
 * @param {boolean} isDegreeGetInChina
 * @param {string} chinaDegree
 * @returns 0|1|2|3|4|5
 */
const getCaseNum = (isDegreeGetInChina, chinaDegree) => {
  if (checkStep3Cases.isCase5(isDegreeGetInChina)) {
    return 5;
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

  return 0;
};

module.exports = {
  uiState,
  checkStep3Cases,
  validateStep3,
  getCaseNum,
};
