const route = require("express").Router();

route.ws('', (ws, req) => {
  ws.send(JSON.stringify({
    str: "hello"
  }));
  ws.on("message", (msg) => {
    console.log(msg);
  })
});

module.exports = route;
