const app = require('../../server/app');

describe('\'nzStudyAreaDetail\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/nz-study-area-detail');
    expect(service).toBeTruthy();
  });
});
