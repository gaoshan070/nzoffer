const {
  chinaDegreesMap,
} = require('../../../../client/src/shared/sharedData');
const {
  isCase3,
  isCase4,
  isCase5,
} = require('../get-programme-pool/get-programme-pool.cases');
const {
  isLessThanIELTS,
  isGreaterThanIELTS,
  isIELTS,
} = require('../get-programme-pool/get-programme-pool.handleCases.utils');

/*
 * case3: UniBachelorOnly
 * Only difference from the case3 in get-programme-pool
 * No need to determine the work exp for 大专
 * IELTS for Bachelor: 4.5 - 5.5
 *
 * case4: UniBachelorOrAbove
 * IELTS for Master/PGD: 5 - 6
 *
 * case5: CollegeWithWorkExp
 */

const isNotMatchedCases = user =>
  user.chinaDegree.startsWith('小') ||
  user.chinaDegree.startsWith('初') ||
  user.chinaDegree.startsWith('高');

const hasNoSelectedProgrammes = user =>
  !user.selected ||
  !user.selected.programme ||
  !user.selected.programme.info;

/*
 * IELTS for Bachelor:
 * 4.5 - 5.5
 */
function getFilterIELTSLevelForCase3(user) {
  if (
    isLessThanIELTS({
      engTestName: user.engTestName,
      engTestScore: user.engTestScore,
      isEqual: true,
      targetIELTS: '4.5',
    })
  ) {
    return '4.5';
  }

  if (
    isIELTS.s50(user.engTestName, user.engTestScore)
  ) {
    return '5.0';
  }

  if (
    isGreaterThanIELTS({
      engTestName: user.engTestName,
      engTestScore: user.engTestScore,
      isEqual: true,
      targetIELTS: '5.5',
    })
  ) {
    return '5.5';
  }
}

/*
 * case4: UniBachelorOrAbove
 * IELTS for Master/PGD: 5 - 6
 */
function getFilterIELTSLevelForCase4(user) {
  if (
    isLessThanIELTS({
      engTestName: user.engTestName,
      engTestScore: user.engTestScore,
      isEqual: true,
      targetIELTS: '5.0',
    })
  ) {
    return '5.0';
  }

  if (
    isIELTS.s55(user.engTestName, user.engTestScore)
  ) {
    return '5.5';
  }

  if (
    isGreaterThanIELTS({
      engTestName: user.engTestName,
      engTestScore: user.engTestScore,
      isEqual: true,
      targetIELTS: '6.0',
    })
  ) {
    return '6.0';
  }
}

async function getLanguageProgramme({
  user,
  languageProgrammeService,
}) {
  // We only worry about degree above senior high school
  const isNotMatched = isNotMatchedCases(user);

  const result = {
    case: 0,
    languageProgramme: {},
  };

  if (isNotMatched) return result;
  if (hasNoSelectedProgrammes(user)) {
    result.case = -1;
    return result;
  }

  const programme = user.selected.programme.info;

  let targetProgrammeLevel = programme.programmeLevel;
  if (targetProgrammeLevel === 'PGD') {
    targetProgrammeLevel = 'Master';
  } else if (targetProgrammeLevel === 'GD') {
    targetProgrammeLevel = 'Bachelor';
  }

  const languageProgrammes = (await languageProgrammeService.find(
    {
      query: {
        university: programme.university._id,
        programmeLevel: targetProgrammeLevel,
      },
    },
  )).data;

  result.case = 1;

  let filterIELTSFunc = ({ requiredIELTSScore }) =>
    requiredIELTSScore ===
    (programme.programmeLevel === 'Bachelor'
      ? getFilterIELTSLevelForCase3(user)
      : getFilterIELTSLevelForCase4(user));

  const languages = languageProgrammes.filter(
    filterIELTSFunc,
  );
  result.languageProgramme =
    languages.length > 0 ? languages[0] : {};

  return result;
}

module.exports = {
  getLanguageProgramme,
};
