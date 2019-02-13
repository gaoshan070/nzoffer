// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  provincesData,
} = require('../../client/src/miscellaneous/cityData/provincesData');
const phoneField = require('./model.share');
const {
  expectedNZDegree,
  nzStudyArea,
  chinaDegree,
  overseaDegree,
  overseaCountry,
} = require('../../client/src/shared/sharedData');

const provinceIdEnum = provincesData.map(p => p.id);
const provinceNameEnum = provincesData.map(
  p => p.name,
);

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const user = new mongooseClient.Schema(
    {
      province: {
        name: {
          type: String,
          required: true,
          enum: provinceNameEnum,
        },
        id: {
          type: String,
          required: true,
          enum: provinceIdEnum,
        },
      },

      isDegreeGetInChina: {
        type: Boolean,
        required: true,
      },

      expectedNZDegree: {
        type: String,
        required: true,
        enum: expectedNZDegree,
      },

      nzStudyArea: {
        type: String,
        required: true,
        enum: nzStudyArea,
      },

      chinaDegree: {
        type: String,
        enum: [...chinaDegree, ''],
      },

      overseaDegree: {
        country: {
          type: String,
          enum: [...overseaCountry, ''],
        },
        degree: {
          type: String,
          enum: [...overseaDegree, ''],
        },
      },

      whenComeNZ: {
        year: {
          type: Number,
          required: true,
        },
        month: {
          type: Number,
          required: true,
        },
      },

      phone: phoneField,

      password: { type: String, required: true },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('user', user);
};
