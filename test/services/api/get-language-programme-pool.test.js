const app = require('../../../server/app');

describe('\'api/get-language-programme-pool\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/get-language-programme-pool');
    expect(service).toBeTruthy();
  });
});
