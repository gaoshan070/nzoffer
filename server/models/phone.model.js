// phone-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const getValidationCode = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const phone = new Schema(
    {
      phone: {
        type: Number,
        required: [true, '请输入手机号'],
        unique: true,
        validate: {
          validator: v => /^\d{11}$/.test(v),
          message: props =>
            `${props.value} 请输入格式正确的手机号!`,
        },
      },
      validationCode: {
        type: Number,
        default: getValidationCode(10000, 99999),
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
