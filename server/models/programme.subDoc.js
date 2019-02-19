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
  const programme = new Schema(
    {
      nzStudyArea: {
        type: String,
        required: true,
        enum: expectedNZDegrees,
      },
      nzStudyAreaDetail: {
        type: String,
        required: true,
      },
      nameEN: {
        type: String,
        required: true,
        validate: {
          validator: isEngWithSpace,
          message: '请输入英文课程名称',
        },
      },
      nameCN: {
        type: String,
        required: true,
        validate: {
          validator: isIncludeChinese,
          message: '请输入包含中文的课程名称',
        },
      },
      location: {
        type: String,
        required: true,
      },
      deadline: [{ type: Date, required: true }],
    },
    {
      timestamps: true,
    },
  );

  return programme;
};
