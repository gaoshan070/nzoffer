/*
 * China degree
 *
 * case1: HighschoolByAge
 * case2: HighschoolByIELTS
 * case3: UniBachelorOnly
 * case4: UniBachelorOrAbove
 * case5: CollegeWithWorkExp
 *
 * Oversea degree
 *
 * case6: UniBachelorOnly
 * case7: UniBachelorOrAbove
 *
 */
const {
  chinaDegreesMap,
} = require('../../../../client/src/shared/sharedData');

function isOverseaDegree(user) {
  return !user.isDegreeGetInChina === false;
}

// case1: HighschoolByAge
function isCase1(user) {
  const { chinaDegree } = user;
  if (isOverseaDegree(user) || !chinaDegree) {
    return false;
  }

  if (
    chinaDegree === '高一在读' ||
    chinaDegreesMap['初中'].includes(chinaDegree) ||
    chinaDegreesMap['小学'].includes(chinaDegree)
  ) {
    return true;
  }

  return false;
}

// case2: HighschoolByIELTS
function isCase2(user) {
  const { chinaDegree } = user;
  if (isOverseaDegree(user) || !chinaDegree) {
    return false;
  }

  const range = chinaDegreesMap['高中'].slice(1);

  if (range.includes(chinaDegree)) {
    return true;
  }

  return false;
}

// case3: UniBachelorOnly
function isCase3(user) {
  const { chinaDegree } = user;
  if (isOverseaDegree(user) || !chinaDegree) {
    return false;
  }

  if (
    [
      '大一在读',
      '大一毕业',
      '大二在读',
      '大二毕业',
      '大学肄业',
      '大专在读',
    ].includes(chinaDegree)
  ) {
    return true;
  }

  if (
    chinaDegree === '大专毕业' &&
    !user.hasWorkExperiences
  ) {
    return true;
  }

  return false;
}

// case4: UniBachelorOrAbove
function isCase4(user) {
  const { chinaDegree } = user;
  if (isOverseaDegree(user) || !chinaDegree) {
    return false;
  }

  if (
    [
      '大三在读',
      '大三毕业',
      '大四在读',
      '本科毕业',
      '研究生',
    ].includes(chinaDegree)
  ) {
    return true;
  }

  return false;
}

// case5: CollegeWithWorkExp
function isCase5(user) {
  const { chinaDegree } = user;
  if (isOverseaDegree(user) || !chinaDegree) {
    return false;
  }

  return (
    chinaDegree === '大专毕业' &&
    user.hasWorkExperiences
  );
}

// case6: [Oversea] UniBachelorOnly
function isCase6(user) {
  if (
    !isOverseaDegree(user) ||
    !user.overseaDegree ||
    !user.overseaDegree.degree
  ) {
    return false;
  }

  const { degree } = user.overseaDegree;

  if (['专科毕业', '大学肄业'].includes(degree)) {
    return true;
  }

  return false;
}

// case7: [Oversea] UniBachelorOrAbove
function isCase7(user) {
  if (
    !isOverseaDegree(user) ||
    !user.overseaDegree ||
    !user.overseaDegree.degree
  ) {
    return false;
  }

  const { degree } = user.overseaDegree;

  if (['本科毕业', '研究生'].includes(degree)) {
    return true;
  }

  return false;
}

function getCaseNumByUser(user) {
  if (isCase1(user)) return 1;
  if (isCase2(user)) return 2;
  if (isCase3(user)) return 3;
  if (isCase4(user)) return 4;
  if (isCase5(user)) return 5;
  if (isCase6(user)) return 6;
  if (isCase7(user)) return 7;
  return 0;
}

module.exports = {
  getCaseNumByUser,
  isCase1,
  isCase2,
  isCase3,
  isCase4,
  isCase5,
  isCase6,
  isCase7,
};
