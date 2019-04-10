// api/highschool-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const {
  chinaDegreesMap,
  engTestScores,
  NO_ENG_SCORE_TEXT,
  gaoKaoScoreLevels,
} = require('../../client/src/shared/sharedData');
const {
  dateReg,
  validFormatInfo,
  isValidTuitionFee,
} = require('../../client/src/shared/programmeFieldsCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const highschool = new Schema(
    {
      programmeLevel: {
        type: String,
        required: true,
        enum: [
          ...chinaDegreesMap['小学'],
          ...chinaDegreesMap['初中'],
          ...chinaDegreesMap['高中'],
        ],
      },

      requiredAge: {
        type: Number,
      },

      requiredIELTSScore: {
        type: String,
        enum: [
          ...engTestScores.IELTS,
          NO_ENG_SCORE_TEXT,
        ],
      },

      name: {
        type: String,
        required: true,
        validate: {
          validator: v => v !== '',
          message: '请输入学校名称',
        },
      },

      programmeDescription: {
        type: String,
        required: true,
        validate: {
          validator: v => v !== '',
          message: '请输入课程方案',
        },
      },

      location: {
        type: String,
        required: true,
        validate: {
          validator: v => v !== '',
          message: '请输入学校名称',
        },
      },

      entryDates: [
        {
          type: String,
          required: true,
          validate: {
            validator: v => dateReg.test(v),
            message: validFormatInfo,
          },
        },
      ],

      tuitionFeeInNZD: {
        type: Number,
        required: true,
        validate: {
          validator: v => isValidTuitionFee(v),
          message: '学费信息有误',
        },
      },

      durationInMonths: [
        {
          type: Number,
          required: true,
        },
      ],

      gaoKaoScoreLevel: {
        type: String,
        enum: gaoKaoScoreLevels,
      },

      logoURL: { type: String, default: '' },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model(
    'highschool',
    highschool,
  );
};
