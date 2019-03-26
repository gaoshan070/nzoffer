const app = require('../../server/app');

describe('"api/language-programme" service', () => {
  it('registered the service', () => {
    const service = app.service(
      'api/language-programme',
    );
    expect(service).toBeTruthy();
  });
});
