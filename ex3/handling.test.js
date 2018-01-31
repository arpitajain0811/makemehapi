const handling = require('./handling.js');
const request = require('request');

describe('creates a server that responds with a static HTML file', () => {
  it('returns file content for index.html', (done) => {
    const call = (data) => {
      request(data, (error, response, body) => {
        expect(body).toEqual(`<html>
        <head><title>Hello Handling</title></head>
        <body>
            Hello Handling
        </body>
    </html>`);
        done();
      });
    };
    handling(call);
  });
});
