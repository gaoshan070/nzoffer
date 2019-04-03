const app = require('../../../server/app');

describe('\'api/partner\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/partner');
    expect(service).toBeTruthy();
  });
});
