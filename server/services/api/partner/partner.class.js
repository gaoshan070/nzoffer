/* eslint-disable no-unused-vars */

const sharedBaseData = {
  isPartner: true,
  expectedNZDegree: '研究生课程',
  isDegreeGetInChina: true,
  nzStudyArea: '537eed02ed345b2e039652d2',
  province: {
    name: '北京市',
    id: '110000',
  },
  whenComeNZ: {
    year: 2310,
    month: 10,
  },
};

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find(params) {
    const result = await this.app
      .service('api/user')
      .find({
        query: {
          isPartner: true,
        },
      });

    return result;
  }

  async get(id, params) {
    const result = await this.app
      .service('api/user')
      .get(id, {
        query: {
          isPartner: true,
        },
      });

    return result;
  }

  async create(data, params) {
    const result = await this.app
      .service('api/user')
      .create({
        ...data,
        ...sharedBaseData,
      });

    return result;
  }

  async update(id, data, params) {
    const result = await this.app
      .service('api/user')
      .update(
        id,
        { ...data, ...sharedBaseData },
        params,
      );

    return result;
  }

  async remove(id, params) {
    const result = await this.app
      .service('api/user')
      .remove(id, params);

    return result;
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
