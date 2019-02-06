const app = require('../../server/app');

describe('\'phone\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/phone');
    expect(service).toBeTruthy();
  });
});
