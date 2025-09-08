import express from "express";
import cors from "cors";

import ConfigRoutes from "./routes/ConfigRoutes.js";
import { corsInWeb } from "./middleWare/CorsMiddleWare.js";

const app = express();
const PORT = 3002;

// app.use(cors());
app.use(express.json());


// Method Cors
// app.use((req, res, next) => {
//     corsInWeb(req, res, next);
//     next();
// })

// routes ..
ConfigRoutes(app);

// app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`The Ln kodKod-Test server is now running ,,, port:${PORT}`);
})