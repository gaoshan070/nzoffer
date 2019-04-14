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
  NO_ENG_SCORE_TEXT,
  expectedNZDegree2programmeLevelMap,
} = require('../../../../client/src/shared/sharedData');
const cases = require('./get-programme-pool.cases');
const {
  defaultResponse,
  getAge,
  isIELTS,
  getIELTSScore,
  highSchoolService,
  getProgrammesForUni,
} = require('./get-programme-pool.handleCases.utils');

/*
 * Response:
 * { programmes: [] }
 */

// case1: HighschoolByAge
async function handleCase1(user, app) {
  if (!cases.isCase1(user)) return defaultResponse;

  const schoolPools = await highSchoolService(
    app,
  ).find({
    query: {
      requiredAge: getAge(user.birthday),
    },
  });

  return {
    case: 1,
    programmes: schoolPools.data,
  };
}

// case2: HighschoolByIELTS
async function handleCase2(user, app) {
  if (!cases.isCase2(user)) return defaultResponse;
  const result = {
    case: 2,
    programmes: [],
  };
  const {
    chinaDegree,
    engTestName,
    engTestScore,
  } = user;
  const schools = (await highSchoolService(app).find(
    {},
  )).data;
  const isUserNoENGTest =
    user.engTestName === NO_ENG_SCORE_TEXT;
  const doesMatchUserChinaDegree = school =>
    school.programmeLevel === user.chinaDegree;

  if (['高一毕业', '高二在读'].includes(chinaDegree)) {
    result.programmes = schools.filter(
      school =>
        (isUserNoENGTest
          ? school.requiredIELTSScore ===
            NO_ENG_SCORE_TEXT
          : school.requiredIELTSScore !==
            NO_ENG_SCORE_TEXT) &&
        doesMatchUserChinaDegree(school),
    );

    return result;
  }

  if (['高二毕业', '高三在读'].includes(chinaDegree)) {
    const pool = schools.filter(school =>
      doesMatchUserChinaDegree(school),
    );

    if (isUserNoENGTest) {
      result.programmes = pool.filter(
        school =>
          school.requiredIELTSScore ===
          NO_ENG_SCORE_TEXT,
      );
      return result;
    }

    if (
      isIELTS.s45(engTestName, engTestScore) ||
      isIELTS.s50(engTestName, engTestScore) ||
      isIELTS.s55(engTestName, engTestScore)
    ) {
      result.programmes = pool.filter(
        school =>
          school.requiredIELTSScore ===
          getIELTSScore(engTestName, engTestScore),
      );
      return result;
    }

    // >= 6.0
    result.programmes = pool.filter(
      school => school.requiredIELTSScore === '6.0',
    );
    return result;
  }

  if (chinaDegree === '高三毕业') {
    const pool = schools.filter(school =>
      doesMatchUserChinaDegree(school),
    );

    if (isUserNoENGTest) {
      result.programmes = pool.filter(
        school =>
          school.requiredIELTSScore ===
            NO_ENG_SCORE_TEXT &&
          school.gaoKaoScoreLevel ===
            user.gaoKaoScoreLevel,
      );
      return result;
    }

    if (user.gaoKaoScoreLevel === '一本线') {
      const secondPool = schools.filter(
        school => school.gaoKaoScoreLevel === '一本线',
      );

      if (
        isIELTS.s45(engTestName, engTestScore) ||
        isIELTS.s50(engTestName, engTestScore) ||
        isIELTS.s55(engTestName, engTestScore)
      ) {
        result.programmes = secondPool.filter(
          school =>
            school.requiredIELTSScore ===
            getIELTSScore(engTestName, engTestScore),
        );
        return result;
      }

      // >= 6.0
      result.programmes = secondPool.filter(
        school => school.requiredIELTSScore === '6.0',
      );
      return result;
    }

    if (
      user.gaoKaoScoreLevel === '一本线以下' ||
      user.gaoKaoScoreLevel === '无成绩'
    ) {
      // 一本线 以下 或者 无成绩
      const subPool = schools.filter(
        school =>
          school.gaoKaoScoreLevel === '一本线以下',
      );

      if (
        isIELTS.s45(engTestName, engTestScore) ||
        isIELTS.s50(engTestName, engTestScore)
      ) {
        result.programmes = subPool.filter(
          school =>
            school.requiredIELTSScore === '5.0',
        );
        return result;
      } else if (
        isIELTS.s55(engTestName, engTestScore)
      ) {
        result.programmes = subPool.filter(
          school =>
            school.requiredIELTSScore === '5.5',
        );
        return result;
      }

      // >= 6.0
      result.programmes = subPool.filter(
        school => school.requiredIELTSScore === '6.0',
      );
      return result;
    }
  }

  return result;
}

// case3: UniBachelorOnly
async function handleCase3(user, app) {
  if (!cases.isCase3(user)) return defaultResponse;
  const result = {
    case: 3,
    programmes: [],
  };

  result.programmes = await getProgrammesForUni({
    targetProgrammeLevel: 'Bachelor',
    user,
    app,
  });

  return result;
}

// case4: UniBachelorOrAbove
async function handleCase4(user, app) {
  if (!cases.isCase4(user)) return defaultResponse;
  const result = {
    case: 4,
    programmes: [],
  };

  const isUserMadeReasonableChoice = [
    '学士学位',
    '硕士学位',
    '研究生课程',
    '学士后课程',
  ].includes(user.expectedNZDegrees);

  if (isUserMadeReasonableChoice) {
    result.programmes = await getProgrammesForUni({
      app,
      user,
      targetProgrammeLevel:
        expectedNZDegree2programmeLevelMap[
          user.expectedNZDegrees
        ],
    });
    return result;
  }

  // If the user's choice is meaningless
  // Like Bachelor want to do HighSchool
  // Then we choose the default - Master for them
  result.programmes = await getProgrammesForUni({
    app,
    user,
    targetProgrammeLevel: 'Master',
  });
  return result;
}

// case5: CollegeWithWorkExp
async function handleCase5(user, app) {
  if (!cases.isCase5(user)) return defaultResponse;
  const result = {
    case: 5,
    programmes: [],
  };

  result.programmes = await getProgrammesForUni({
    app,
    user,
    targetProgrammeLevel: '大专有经验',
    specialCase:
      getProgrammesForUni.specialCase.collegeWithExp,
  });
  return result;
}

// case6: [Oversea degree] UniBachelorOnly
async function handleCase6(user, app) {
  if (!cases.isCase6(user)) return defaultResponse;
  const result = {
    case: 6,
    programmes: [],
  };

  result.programmes = await getProgrammesForUni({
    targetProgrammeLevel: 'Bachelor',
    user,
    app,
    specialCase:
      getProgrammesForUni.specialCase.oversea,
  });

  return result;
}

// case7: [Oversea degree] UniBachelorOrAbove
async function handleCase7(user, app) {
  if (!cases.isCase7(user)) return defaultResponse;
  const result = {
    case: 7,
    programmes: [],
  };

  const isUserMadeReasonableChoice = [
    '学士学位',
    '硕士学位',
    '研究生课程',
    '学士后课程',
  ].includes(user.expectedNZDegrees);

  if (isUserMadeReasonableChoice) {
    result.programmes = await getProgrammesForUni({
      specialCase:
        getProgrammesForUni.specialCase.oversea,
      app,
      user,
      targetProgrammeLevel:
        expectedNZDegree2programmeLevelMap[
          user.expectedNZDegrees
        ],
    });
    return result;
  }

  // If the user's choice is meaningless
  // Like Bachelor want to do HighSchool
  // Then we choose the default - Master for them
  result.programmes = await getProgrammesForUni({
    app,
    user,
    targetProgrammeLevel: 'Master',
    specialCase:
      getProgrammesForUni.specialCase.oversea,
  });
  return result;
}

const caseHandlerMap = {
  1: handleCase1,
  2: handleCase2,
  3: handleCase3,
  4: handleCase4,
  5: handleCase5,
  6: handleCase6,
  7: handleCase7,
};

module.exports = { caseHandlerMap };
