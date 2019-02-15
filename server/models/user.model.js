// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const {
  provincesData,
} = require('../../client/src/miscellaneous/cityData/provincesData');
const {
  citiesData,
} = require('../../client/src/miscellaneous/cityData/citiesData');
const phoneField = require('./model.share');
const {
  expectedNZDegrees,
  nzStudyAreas,
  chinaDegrees,
  overseaDegrees,
  overseaCountries,
} = require('../../client/src/shared/sharedData');
const {
  isChinese,
} = require('../../client/src/shared/cnCheck');
const {
  validDateStr,
} = require('../../client/src/shared/dateCheck');
const {
  isStreetNumValid,
  isStreetNameValid,
} = require('../../client/src/shared/streetNameNumCheck');
const {
  isEmailValid,
} = require('../../client/src/shared/emailCheck');

const provinceIdEnum = provincesData.map(p => p.id);
const provinceNameEnum = provincesData.map(
  p => p.name,
);

function getCityNamesIds() {
  const provinceIds = Object.keys(citiesData);
  const cityNamesEnum = [];
  const cityIdsEnum = [];
  provinceIds.forEach(provinceId => {
    citiesData[provinceId].forEach(city => {
      cityNamesEnum.push(city.name);
      cityIdsEnum.push(city.id);
    });
  });
  return {
    cityNamesEnum,
    cityIdsEnum,
  };
}

const {
  cityIdsEnum,
  cityNamesEnum,
} = getCityNamesIds();

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

      city: {
        name: {
          type: String,
          enum: cityNamesEnum,
        },
        id: {
          type: String,
          enum: cityIdsEnum,
        },
        provinceId: {
          type: String,
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
        enum: expectedNZDegrees,
      },

      nzStudyArea: {
        type: String,
        required: true,
        enum: nzStudyAreas,
      },

      chinaDegree: {
        type: String,
        enum: [...chinaDegrees, ''],
      },

      overseaDegree: {
        country: {
          type: String,
          enum: [...overseaCountries, ''],
        },
        degree: {
          type: String,
          enum: [...overseaDegrees, ''],
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

      firstName: {
        type: String,
        validate: {
          validator: isChinese,
          message: '名 必须是中文哦',
        },
      },

      lastName: {
        type: String,
        validate: {
          validator: isChinese,
          message: '姓 必须是中文哦',
        },
      },

      birthday: {
        type: String,
        validate: {
          validator: v => !validDateStr(v).error,
          message: ({ value }) =>
            validDateStr(value).errMsg,
        },
      },

      gender: {
        type: String,
        enum: ['男', '女'],
      },

      streetNum: {
        type: String,
        validate: {
          validator: isStreetNumValid,
          message: '街道号 有点问题哦，请仔细检查',
        },
      },

      streetName: {
        type: String,
        validate: {
          validator: isStreetNameValid,
          message: '街道名 有点问题哦，请仔细检查',
        },
      },

      email: {
        type: String,
        validate: {
          validator: isEmailValid,
          message: '请填写正确的电子邮箱',
        },
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('user', user);
};
