const app = require('../../server/app');

describe('\'nzStudyArea\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/nz-study-area');
    expect(service).toBeTruthy();
  });
});
