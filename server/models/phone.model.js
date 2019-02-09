// phone-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const phoneField = require('./model.share');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const phone = new Schema(
    {
      phone: phoneField,
      validationCode: {
        type: Number,
        required: true,
      },
      expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' },
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('phone', phone);
};
