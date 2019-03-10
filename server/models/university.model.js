// university-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  isEngWithSpaceAndNumber,
} = require('../../client/src/shared/enCheck');
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');
const {
  overseaCountries,
} = require('../../client/src/shared/sharedData');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

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
      country: {
        type: String,
        enum: overseaCountries,
        required: true,
      },
      logoURL: { type: String, required: true },
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
