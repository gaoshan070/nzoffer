// nzStudyAreaDetail-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  isEngWithSpaceAndNumAndBrackets,
} = require('../../client/src/shared/enCheck');
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const nzStudyAreaDetail = new Schema(
    {
      nameEN: {
        type: String,
        required: true,
        validate: {
          validator: isEngWithSpaceAndNumAndBrackets,
          message: '请输入英文专业细分名称',
        },
      },

      nameCN: {
        type: String,
        required: true,
        validate: {
          validator: isIncludeChinese,
          message: '请输入包含中文的专业细分名称',
        },
      },

      nzStudyArea: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'nzStudyArea',
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model(
    'nzStudyAreaDetail',
    nzStudyAreaDetail,
  );
};
