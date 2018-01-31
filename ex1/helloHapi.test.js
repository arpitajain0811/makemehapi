const helloHapi = require('./helloHapi.js');
const request = require('request');

describe('creates a server that listens on the input port', () => {
  it('returns Hello hapi when an http request is sent', (done) => {
    const call = (data) => {
      request(data, (error, response, body) => {
        expect(body).toEqual('Hello hapi');
        done();
      });
    };
    helloHapi(call);
  });
});
