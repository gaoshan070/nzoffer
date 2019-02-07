// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const user = new mongooseClient.Schema(
    {
      province: {
        required: true,
        name: {
          type: String,
        },
        id: {
          type: Number,
        },
      },

      isDegreeGetInChina: {
        type: Boolean,
        required: true,
      },

      expectedNZDegree: {
        type: String,
        required: true,
        enum: [
          '语言课程',
          '学士学位',
          '硕士学位',
          '研究生课程',
          '学士后课程',
        ],
      },

      studyArea: {
        type: String,
        required: true,
        enum: [
          '传播影视',
          '体育运动',
          '法律学科',
          '心理学科',
          '工程学科',
          '艺术时尚',
          '航空航天',
          '医药护理',
          '环境地理',
          '音乐舞蹈',
          '教育学科',
          '语言文学',
          '建筑学科',
          '多媒体设计',
          '旅游酒管',
          '计算机学科',
          '农林动植',
          '新西兰高中',
          '商科管理',
          '新西兰初中',
          '社会学科',
          '生物学科',
          '食品科学',
          '数理化学',
        ],
      },

      chinaDegree: {
        type: String,
        required: true,
        enum: [
          '初中在读',
          '初中毕业',
          '初中肄业',
          '高中在读',
          '高中毕业',
          '高中肄业',
          '大专在读',
          '本科在读',
          '大学毕业',
          '大学肄业',
          '研究生',
        ],
      },

      overseaDegree: {
        country: {
          type: String,
          required: true,
          enum: [
            '英国',
            '澳洲',
            '美国',
            '加拿大',
            '新西兰',
            '新加坡',
            '欧洲国家',
            '亚洲国家',
          ],
        },
        degree: {
          type: String,
          required: true,
          enum: [
            '本科毕业',
            '研究生',
            '专科毕业',
            '大学肄业',
          ],
        },
      },

      whenComeNZ: {
        required: true,
        year: {
          type: Number,
        },
        month: {
          type: Number,
        },
      },

      mobile: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
      },
      password: { type: String },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('user', user);
};
