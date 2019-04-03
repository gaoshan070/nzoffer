// api/partner-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  isEmailValid,
} = require('../../client/src/shared/emailCheck');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const partner = new Schema(
    {
      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        validate: {
          validator: v => isEmailValid(v),
          message: '请输入格式正确的电子邮件',
        },
      },

      password: {
        type: String,
        required: true,
      },

      shouldSendEmail: {
        type: Boolean,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('partner', partner);
};
