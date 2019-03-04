// nzStudyArea-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const nzStudyArea = new Schema(
    {
      nameCN: {
        type: String,
        required: true,
        validate: {
          validator: isIncludeChinese,
          message: '请输入包含中文的学习领域名称',
        },
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model(
    'nzStudyArea',
    nzStudyArea,
  );
};
