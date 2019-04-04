const app = require('../../../server/app');

describe('\'api/get-programme-pool\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/get-programme-pool');
    expect(service).toBeTruthy();
  });
});
