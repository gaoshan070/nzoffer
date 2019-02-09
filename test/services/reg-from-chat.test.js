const app = require('../../server/app');

describe('\'regFromChat\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/reg-from-chat');
    expect(service).toBeTruthy();
  });
});
