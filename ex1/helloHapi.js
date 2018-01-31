const Hapi = require('hapi');

const helloHapi = (callback) => {
  const server = new Hapi.Server();

  server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080),
  });
  server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => reply('Hello hapi'),
  // reply();,
  });
  server.start(() => {
    callback(server.info.uri);
  });
};
module.exports = helloHapi;
