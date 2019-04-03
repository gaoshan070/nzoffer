const app = require('../../../server/app');

describe('\'api/select-school\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/select-school');
    expect(service).toBeTruthy();
  });
});
