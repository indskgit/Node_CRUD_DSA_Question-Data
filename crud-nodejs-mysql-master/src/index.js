import { request } from "express";
import app from "./app.js";
import { port } from "./config.js";``

app.listen(port);
console.log("server running on "  + "https//localhost:" +port);