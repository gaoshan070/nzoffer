const app = require('../../server/app');

describe('\'user\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/user');
    expect(service).toBeTruthy();
  });
});
