// api/language-programme-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  engTestScores,
  programmeLevel,
} = require('../../client/src/shared/sharedData');
const {
  isEngWithSpaceAndNumAndBrackets,
} = require('../../client/src/shared/enCheck');
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');
const {
  isValidTuitionFee,
} = require('../../client/src/shared/programmeFieldsCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const languageProgramme = new Schema(
    {
      nameEN: {
        type: String,
        required: true,
        validate: {
          validator: isEngWithSpaceAndNumAndBrackets,
          message: '请输入英文语言课名称',
        },
      },

      nameCN: {
        type: String,
        required: true,
        validate: {
          validator: isIncludeChinese,
          message: '请输入包含中文的语言课程名称',
        },
      },

      university: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'university',
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
        validate: {
          validator: v => isValidTuitionFee(v),
          message: '学费信息有误',
        },
      },

      lengthInWeeks: {
        type: Number,
        required: true,
        validate: {
          validator: v => isValidTuitionFee(v),
          message: '课程长度有误',
        },
      },

      programmeLevel: {
        type: String,
        required: true,
        enum: programmeLevel,
      },

      requiredIELTSScore: {
        type: String,
        required: true,
        enum: engTestScores.IELTS,
      },

      isInstituteCourse: {
        type: Boolean,
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model(
    'languageProgramme',
    languageProgramme,
  );
};
