const app = require('../../server/app');

describe('\'university\' service', () => {
  it('registered the service', () => {
    const service = app.service('university');
    expect(service).toBeTruthy();
  });
});
