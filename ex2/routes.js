const Hapi = require('hapi');

const routes = (name, callback) => {
  const server = new Hapi.Server();

  server.connection({
    host: 'localhost',
    port: 8000,
    // port: Number(process.argv[2] || 8080),
  });
  server.route({
    path: '/{name}',
    method: 'GET',
    handler: (request, reply) => reply(`Hello ${request.params.name}`),
  });
  server.start(() => {
    const url = `${server.info.uri}/${name}`;
    console.log(url);
    callback(url);
  });
};
module.exports = routes;
