const app = require('../../server/app');

describe('\'cnStudyArea\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/cn-study-area');
    expect(service).toBeTruthy();
  });
});
