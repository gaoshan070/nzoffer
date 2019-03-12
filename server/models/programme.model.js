// programme-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  expectedNZDegrees,
  nzStudyAreas,
  chinaDegrees,
  overseaDegrees,
  programmeLevel,
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

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const programme = new Schema(
    {
      nzStudyArea: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'nzStudyArea',
      },

      nzStudyAreaDetail: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'nzStudyAreaDetail',
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

      university: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'university',
      },

      location: {
        type: String,
        required: true,
      },

      applicationDeadline: [
        {
          type: String,
          required: true,
        },
      ],

      duration: {
        type: String,
        required: true,
      },

      startMonth: [
        {
          type: Number,
          required: true,
          enum: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
          ],
        },
      ],

      tuitionFeeInNZD: {
        type: Number,
        required: true,
      },

      requiredUniAverage: {
        type: String,
        required: true,
        enum: cnUniAverageScores,
      },

      requiredEngTestScore: {
        type: String,
        required: true,
        enum: engTestScores.IELTS,
      },

      requiredChinaDegree: {
        type: String,
        required: true,
        enum: chinaDegrees,
      },

      requiredOverseaDegree: {
        type: String,
        required: true,
        enum: overseaDegrees,
      },

      educationRequirement: {
        type: String,
        required: true,
        validate: {
          validator: value => {
            if (typeof value !== 'string') {
              return false;
            }

            return (
              value === 'b' ||
              value === 'r' ||
              value === 's' ||
              value.startsWith('+')
            );
          },
          message:
            '请输入正确的值，可以是 B，R，S 或者 +数字, ',
        },
      },

      programmeLevel: {
        type: String,
        required: true,
        enum: programmeLevel,
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('programme', programme);
};
