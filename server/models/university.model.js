// university-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const getProgrammeSubDoc = require('./programme.subDoc');
const getLanguageProgrammeSubDoc = require('./languageProgramme.subDoc');
const {
  isEngWithSpaceAndNumber,
} = require('../../client/src/shared/enCheck');
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const programmeSub = getProgrammeSubDoc(Schema);
  const languageProgrammeSub = getLanguageProgrammeSubDoc(
    Schema,
  );

  const university = new Schema(
    {
      nameCN: {
        type: String,
        required: true,
        validate: {
          validator: isIncludeChinese,
          message: '请输入包含中文的课程名称',
        },
      },
      nameEN: {
        type: String,
        required: true,
        validate: {
          validator: isEngWithSpaceAndNumber,
          message: '请输入英文课程名称',
        },
      },
      logoURL: { type: String, required: true },
      programmes: [programmeSub],
      languageProgrammes: [languageProgrammeSub],
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model(
    'university',
    university,
  );
};
