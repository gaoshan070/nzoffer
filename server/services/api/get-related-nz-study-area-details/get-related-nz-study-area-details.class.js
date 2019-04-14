/* eslint-disable no-unused-vars */
const {
  isCase3,
  isCase4,
} = require('../get-programme-pool/get-programme-pool.cases');
const {
  programmeService,
  expectedNZDegree2programmeLevelMap,
} = require('../get-programme-pool/get-programme-pool.handleCases.utils');

const getProgrammes = async ({
  targetProgrammeLevel,
  user,
  app,
}) => {
  const { data } = await programmeService(app).find({
    query: {
      programmeLevel: targetProgrammeLevel,
      $populate: ['university'],
    },
  });
  return data;
};

const getProgrammesIfEmpty = async ({
  targetProgrammeLevel,
  user,
  app,
}) => {
  let programmes = await getProgrammes({
    targetProgrammeLevel,
    user,
    app,
  });

  if (
    !programmes ||
    (Array.isArray(programmes) &&
      programmes.length === 0)
  ) {
    if (targetProgrammeLevel !== 'Master') {
      programmes = await getProgrammes({
        targetProgrammeLevel: 'Master',
        user,
        app,
      });
    }
  }

  return programmes;
};

const createResult = programmes => {
  let result = {
    nzStudyAreas: [],
    nzStudyAreaDetails: [],
  };

  const studyIds = new Set();
  const studyDetailIds = new Set();

  if (programmes.length > 0) {
    programmes.forEach(programme => {
      const nzStudyAreaId = programme.nzStudyArea._id.toString();
      const nzStudyAreaDetailId = programme.nzStudyAreaDetail._id.toString();

      if (!studyIds.has(nzStudyAreaId)) {
        studyIds.add(nzStudyAreaId);
        result.nzStudyAreas.push(
          programme.nzStudyArea,
        );
      }

      if (!studyDetailIds.has(nzStudyAreaDetailId)) {
        studyDetailIds.add(nzStudyAreaDetailId);
        result.nzStudyAreaDetails.push(
          programme.nzStudyAreaDetail,
        );
      }
    });
  }

  return result;
};

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find(params) {
    let chinaDegree = '';
    let result = {
      nzStudyAreas: [],
      nzStudyAreaDetails: [],
    };

    const { user } = params;
    chinaDegree = user
      ? user.chinaDegree
      : params.query.chinaDegree;
    if (!chinaDegree) return result;

    if (isCase3(user)) {
      const programmes = await getProgrammes({
        targetProgrammeLevel: 'Bachelor',
        user,
        app: this.app,
      });

      if (programmes) {
        return createResult(programmes);
      }
    } else if (isCase4(user)) {
      const isUserMadeReasonableChoice = [
        '学士学位',
        '硕士学位',
        '研究生课程',
        '学士后课程',
      ].includes(user.expectedNZDegrees);

      let programmes = [];

      if (isUserMadeReasonableChoice) {
        programmes = await getProgrammesIfEmpty({
          targetProgrammeLevel:
            expectedNZDegree2programmeLevelMap[
              user.expectedNZDegrees
            ],
          user,
          app: this.app,
        });
      } else {
        programmes = await getProgrammes({
          targetProgrammeLevel: 'Master',
          user,
          app: this.app,
        });
      }

      if (programmes) {
        return createResult(programmes);
      }
    }

    const nzStudyAreas = (await this.app
      .service('api/nz-study-area')
      .find({})).data;

    const nzStudyAreaDetails = (await this.app
      .service('api/nz-study-area-detail')
      .find({})).data;

    return {
      nzStudyAreas,
      nzStudyAreaDetails,
    };
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
