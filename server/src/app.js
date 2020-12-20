const app = require("express")();
const expressWs = require("express-ws")(app);
const root = require("./routes/root");

app.use("/", root);

module.exports = app;
