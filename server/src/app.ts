import Express from "express";
import enableWs from "express-ws";
export const app = Express();
enableWs(app);
import { route } from "./routes/root"

app.use("/", route);
