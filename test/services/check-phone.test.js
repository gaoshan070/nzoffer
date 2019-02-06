const app = require('../../server/app');

describe('\'check-phone\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/check-phone');
    expect(service).toBeTruthy();
  });
});
