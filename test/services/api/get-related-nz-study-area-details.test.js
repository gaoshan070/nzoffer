const app = require('../../../server/app');

describe('\'api/get-related-nz-study-area-details\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/get-related-nz-study-area-details');
    expect(service).toBeTruthy();
  });
});
