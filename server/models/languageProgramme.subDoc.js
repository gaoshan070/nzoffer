const {
  expectedNZDegrees,
  nzStudyAreas,
  chinaDegrees,
  overseaDegrees,
  overseaCountries,
  uni211Data,
  cnUniAverageScores,
  engTestScores,
  gaoKaoScoreLevels,
} = require('../../client/src/shared/sharedData');
const {
  isEngOnly,
  isEngWithSpace,
} = require('../../client/src/shared/enCheck');
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');

module.exports = function(Schema) {
  const languageProgramme = new Schema({
    nameCN: {
      type: String,
      required: true,
    },
    tuitionFeeInNZD: {
      type: Number,
      required: true,
    },
    durationInWeeks: {
      type: Number,
      required: true,
    },
    startDate: [
      {
        type: Date,
        required: true,
      },
    ],
  });

  return languageProgramme;
};
