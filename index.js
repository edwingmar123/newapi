const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3002;
server.listen(port, () => {
    console.log(
        ` json server is running on http://localhost:${port}
`

          )
})