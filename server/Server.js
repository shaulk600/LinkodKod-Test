import express from "express";
import { config } from "dotenv";
import cors from "cors";
config({ path: "../.env" });

import ConfigRoutes from "./routes/ConfigRoutes.js";
import { corsInWeb } from "./middleWare/CorsMiddleWare.js";

const app = express();
const PORT = process.env.PORT | 3002;

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

// Method Cors
app.use((req, res, next) => {
    corsInWeb(req, res, next);
    next();
})

// routes ..
ConfigRoutes(app);

app.listen(PORT, () => {
    console.log(`The Ln kodKod-Test server is now running ,,, port:${PORT}`);
})