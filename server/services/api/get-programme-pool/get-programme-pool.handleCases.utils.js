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
  engTestScores,
  cnUniAverageScores,
} = require('../../../../client/src/shared/sharedData');
const dateFns = require('date-fns');

const programmeService = app =>
  app.service('api/programme');
const languageService = app =>
  app.service('api/language-programme');
const highSchoolService = app =>
  app.service('api/highschool');
const nzStudyAreaService = app =>
  app.service('api/nz-study-area');
const cnStudyAreaService = app =>
  app.service('api/cn-study-area');

/*
 * Response:
 * { programmes: [], languageProgrammes:[] }
 */

const defaultResponse = {
  case: 0,
  programmes: [],
};

function isOverseaDegree(user) {
  return !user.isDegreeGetInChina === false;
}

function getAge(dateStr) {
  return dateFns.differenceInYears(
    new Date(),
    dateFns.parse(dateStr, 'YYYY/MM/DD'),
  );
}

function ieltsWrapper(ieltsScoreToMatch) {
  // Each array in engTestScores, they all have the same
  // amount of data. Which means, for example:
  // PTE[0] === '< 35', and IELTS[0] === '4.5'
  // So, PTE '< 35' === IELTS '4.5'
  return (engTestName, engTestScore) => {
    const engScores = engTestScores[engTestName];
    if (!engScores) return false;
    const index = engScores.findIndex(
      i => i === engTestScore,
    );
    return (
      index ===
      engTestScores.IELTS.findIndex(
        i => i === ieltsScoreToMatch,
      )
    );
  };
}

const isIELTS = {
  s45: ieltsWrapper('4.5'),
  s50: ieltsWrapper('5.0'),
  s55: ieltsWrapper('5.5'),
  s60: ieltsWrapper('6.0'),
  s65: ieltsWrapper('6.5'),
  s70: ieltsWrapper('7.0'),
  s75: ieltsWrapper('7.5'),
};

const getIELTSScore = (engTestName, engTestScore) => {
  const engScores = engTestScores[engTestName];
  if (!engScores) return '';
  const index = engScores.findIndex(
    i => i === engTestScore,
  );
  const result = engTestScores.IELTS[index];
  return result ? result : '';
};

function isLessThanIELTS({
  engTestName,
  engTestScore,
  targetIELTS,
  isEqual,
}) {
  const matchedIELTSIndex = engTestScores[
    engTestName
  ].findIndex(i => i === engTestScore);
  const targetIELTSIndex = engTestScores.IELTS.findIndex(
    i => i === targetIELTS,
  );

  return isEqual
    ? matchedIELTSIndex <= targetIELTSIndex
    : matchedIELTSIndex < targetIELTSIndex;
}

function isGreaterThanIELTS({
  engTestName,
  engTestScore,
  targetIELTS,
  isEqual,
}) {
  const matchedIELTSIndex = engTestScores[
    engTestName
  ].findIndex(i => i === engTestScore);
  const targetIELTSIndex = engTestScores.IELTS.findIndex(
    i => i === targetIELTS,
  );

  return isEqual
    ? matchedIELTSIndex >= targetIELTSIndex
    : matchedIELTSIndex > targetIELTSIndex;
}

function isGreaterThanRequiredUniScore({
  userScore,
  targetScore,
  isEqual,
}) {
  const userScoreIndex = cnUniAverageScores.findIndex(
    i => i.slice(0, 5) === userScore.slice(0, 5),
  );
  const targetScoreIndex = cnUniAverageScores.findIndex(
    i => i.slice(0, 5) === targetScore.slice(0, 5),
  );

  return isEqual
    ? userScoreIndex <= targetScoreIndex
    : userScoreIndex < targetScoreIndex;
}

function isUserIELTSMatchProgramme(user, programme) {
  return isGreaterThanIELTS({
    engTestName: user.engTestName,
    engTestScore: user.engTestScore,
    targetIELTS: programme.requiredIELTSScore,
    isEqual: true,
  });
}

function getProgrammesWhichUserIELTSIsOK(
  programmesArray,
  user,
) {
  return programmesArray.filter(programme =>
    isGreaterThanIELTS({
      engTestName: user.engTestName,
      engTestScore: user.engTestScore,
      targetIELTS: programme.requiredIELTSScore,
      isEqual: true,
    }),
  );
}

function getProgrammesWhichUserAverageScoreIsOK(
  programmesArray,
  user,
) {
  return programmesArray.filter(programme =>
    isGreaterThanRequiredUniScore({
      userScore: user.cnUniAverageScore,
      targetScore: programme.requiredUniAverage,
      isEqual: true,
    }),
  );
}

const educationRequiredMap = {
  1: '传媒影视',
  2: '法律学科',
  3: '工程学科',
  4: '环境地理',
  5: '教育学科',
  6: '建筑学科',
  7: '旅游酒管',
  8: '农林动植',
  9: '商科管理',
  10: '社会科学',
  11: '生物科学',
  12: '食品科学',
  13: '数理化学',
  14: '体育运动',
  15: '心理科学',
  16: '艺术时尚',
  17: '医药护理',
  18: '音乐舞蹈',
  19: '语言文学',
  20: '多媒体设计',
  21: '计算机科学',
};

const isUserMatchEducationRequirement = (
  user,
  educationRequirement,
  nzStudyAreas,
) => {
  const toMatch = educationRequirement
    .split('+')
    .filter(i => i);
  return toMatch.some(item => {
    const studyAreaName = educationRequiredMap[item];
    const nzStudyArea = nzStudyAreas.find(
      i => i.nameCN === studyAreaName,
    );

    return (
      user.cnStudyArea.nzStudyArea === nzStudyArea._id
    );
  });
};

const isUserCNStudyAreaMatchNZStudyArea = (
  user,
  programme,
) =>
  user.cnStudyArea.nzStudyArea ===
  programme.nzStudyArea;
const isProgrammeNotRequireStudyAreaMatch = programme =>
  programme.educationRequirement.includes('B');
const isProgrammeRequireStudyAreaMatch = programme =>
  programme.educationRequirement.includes('R');
const isProgrammeRequireExtraStudyAreaMatch = programme =>
  programme.educationRequirement.includes('+');

function getProgrammesFromEducationRequirement({
  programmes,
  user,
  nzStudyAreas,
}) {
  return programmes.filter(
    programme =>
      // case 1: no extra requirement
      isProgrammeNotRequireStudyAreaMatch(programme) ||
      // case 2: programme requires, but user match
      (isProgrammeRequireStudyAreaMatch(programme) &&
        isUserCNStudyAreaMatchNZStudyArea(
          user,
          programme,
        )) ||
      // case3 require extra but user matches
      (isProgrammeRequireExtraStudyAreaMatch(
        programme,
      ) &&
        isUserCNStudyAreaMatchNZStudyArea(
          user,
          programme,
        )) ||
      // case 4 require extra and user match the extra
      (isProgrammeRequireExtraStudyAreaMatch(
        programme,
      ) &&
        isUserCNStudyAreaMatchNZStudyArea(
          user,
          programme,
        ) &&
        isUserMatchEducationRequirement(
          user,
          programme.educationRequirement,
          nzStudyAreas,
        )),
  );
}

const UNI_SPECIAL_CASE = {
  collegeWithExp: 'collegeWithExp',
  oversea: 'oversea',
};

async function getProgrammesForUni({
  app,
  targetProgrammeLevel,
  user,
  specialCase, // 'collegeWithExp' || 'oversea'
}) {
  let result;
  const { data } = await programmeService(app).find({
    query: {
      programmeLevel: targetProgrammeLevel,
      isInstituteCourse: false,
      nzStudyArea: user.nzStudyArea,
      nzStudyAreaDetail: user.nzStudyAreaDetail,
      $populate: ['university'],
    },
  });
  const isNotBachelor =
    targetProgrammeLevel !== 'Bachelor';

  result = data;

  // No Institute Course for Bachelor
  if (!isNotBachelor) {
    result = result.filter(
      programme => !programme.isInstituteCourse,
    );
  }

  if (!specialCase && isNotBachelor) {
    const nzStudyAreas = (await nzStudyAreaService(
      app,
    ).find({})).data;

    // Bachelor no entry requirement
    // check EducationRequirement
    result = getProgrammesFromEducationRequirement({
      programmes: data,
      user,
      nzStudyAreas,
    });
  }

  if (
    (!specialCase ||
      specialCase !==
        UNI_SPECIAL_CASE.collegeWithExp) &&
    isNotBachelor
  ) {
    // check uniAverage
    result = getProgrammesWhichUserAverageScoreIsOK(
      result,
      user,
    );
  }

  // check IELTS
  // We don't check IELTS, because if the user is not
  // fullfil, we will send them to language prpgrammes
  // result = getProgrammesWhichUserIELTSIsOK(
  //   result,
  //   user,
  // );

  // if empty, grab fallback
  if (!result.length) {
    result = (await programmeService(app).find({
      query: {
        programmeLevel: targetProgrammeLevel,
        // 商科
        nzStudyArea: '5c9842abfd9fed0026a7cd70',
        isInstituteCourse: false,
        $populate: ['university'],
      },
    })).data;
  }

  return result;
}

getProgrammesForUni.specialCase = UNI_SPECIAL_CASE;

module.exports = {
  defaultResponse,
  isOverseaDegree,
  getAge,
  isIELTS,
  getIELTSScore,
  isLessThanIELTS,
  isGreaterThanIELTS,
  getProgrammesWhichUserIELTSIsOK,
  isUserIELTSMatchProgramme,
  isUserMatchEducationRequirement,
  getProgrammesFromEducationRequirement,
  getProgrammesWhichUserAverageScoreIsOK,
  isGreaterThanRequiredUniScore,
  getProgrammesForUni,
  programmeService,
  languageService,
  highSchoolService,
  nzStudyAreaService,
  cnStudyAreaService,
};
