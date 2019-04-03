const app = require('../../../server/app');

describe('\'api/highschool\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/highschool');
    expect(service).toBeTruthy();
  });
});
