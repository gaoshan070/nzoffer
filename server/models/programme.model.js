// programme-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  programmeLevel,
  cnUniAverageScores,
  engTestScores,
} = require('../../client/src/shared/sharedData');
const {
  isEngWithSpace,
} = require('../../client/src/shared/enCheck');
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');
const {
  dateReg,
  validFormatInfo,
  isValidDuration,
  isValidTuitionFee,
  validDurationFormatInfo,
} = require('../../client/src/shared/programmeFieldsCheck');

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
          validate: {
            validator: v => dateReg.test(v),
            message: validFormatInfo,
          },
        },
      ],

      duration: {
        type: String,
        required: true,
        validate: {
          validator: v => isValidDuration(v),
          message: validDurationFormatInfo,
        },
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

      difficulty: {
        type: Number,
        required: true,
        validate: {
          validator: v => isValidTuitionFee(v),
          message: '难度信息有误',
        },
      },

      tuitionFeeInNZD: {
        type: Number,
        required: true,
        validate: {
          validator: v => isValidTuitionFee(v),
          message: '学费信息有误',
        },
      },

      requiredUniAverage: {
        type: String,
        required: true,
        enum: cnUniAverageScores,
      },

      requiredIELTSScore: {
        type: String,
        required: true,
        enum: engTestScores.IELTS,
      },

      educationRequirement: {
        type: String,
        required: true,
      },

      programmeLevel: {
        type: String,
        required: true,
        enum: programmeLevel,
      },

      isInstituteCourse: {
        type: Boolean,
        required: true,
      },

      requiredDocumentsName: [
        {
          type: String,
          validate: {
            validator: v => v !== '',
            message: '文件名不能为空',
          },
        },
      ],
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('programme', programme);
};
