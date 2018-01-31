const routes = require('./routes.js');
const request = require('request');

describe('creates a server that listens on the input port', () => {
  it('returns Hello name when an http request is sent with name as path parameter', (done) => {
    const call = (data) => {
      request(data, (error, response, body) => {
        expect(body).toEqual('Hello arpita');
        done();
      });
    };
    routes('arpita', call);
  });
  it('returns Hello when an http request is sent with no path parameter', (done) => {
    const call = (data) => {
      request(data, (error, response, body) => {
        expect(body).toEqual('Hello');
        done();
      });
    };
    routes('', call);
  });
});
