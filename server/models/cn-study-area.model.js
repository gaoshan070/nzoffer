// cnStudyArea-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  isIncludeChinese,
} = require('../../client/src/shared/cnCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const cnStudyArea = new Schema(
    {
      nameCN: {
        type: String,
        required: true,
        validate: {
          validator: isIncludeChinese,
          message: '请输入包含中文的国内对应专业名称',
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
    'cnStudyArea',
    cnStudyArea,
  );
};
