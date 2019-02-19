// university-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const getProgrammeSubDoc = require('./programme.subDoc');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const programmeSub = getProgrammeSubDoc(Schema);

  const university = new Schema(
    {
      nameCN: { type: String, required: true },
      nameEN: { type: String, required: true },
      nameLogo: { type: String, required: true },
      programmes: [programmeSub],
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
