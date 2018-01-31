const path = require('path');
const Hapi = require('hapi');
const inert = require('inert');

const handling = (callback) => {
  const server = new Hapi.Server();

  server.register(inert, (err) => {
    if (err) throw err;
  });
  server.connection({
    host: 'localhost',
    port: Number(8000),
  });
  server.route({
    path: '/',
    method: 'GET',
    handler: {
      file: path.join(__dirname, 'index.html'),
    },
  });
  server.start(() => {
    callback(server.info.uri);
  });
};
module.exports = handling;
