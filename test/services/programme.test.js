const app = require('../../server/app');

describe('\'programme\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/programme');
    expect(service).toBeTruthy();
  });
});
