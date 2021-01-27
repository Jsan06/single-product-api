const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const router1 = jsonServer.router1('db1.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(router1);

server.listen(port);