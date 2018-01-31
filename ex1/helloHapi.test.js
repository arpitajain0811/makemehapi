const helloHapi = require('./helloHapi.js');

describe('creates a server that listens on the input port', () => {
  it('returns Hello hapi when an http request is sent', (done) => {
    const call = (data) => {
      expect(data).toEqual('http://localhost:8080');
      done();
    };
    helloHapi(call);
  });
});
