import express from "express";
import cors from "cors";


import ConfigRoutes from "./routes/ConfigRoutes.js";
import { corsInWeb, corsMiddleware } from "./middleWare/CorsMiddleWare.js";

const PORT = 3002;
const app = express();

app.use(cors({
    origin:('Access-Control-Allow-Origin',"http://localhost:5173")
}));
app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests only from this origin
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow these HTTP methods
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow these headers
//     next();
// });



// // Method Cors
// app.use((req, res, next) => {
//     corsInWeb(req, res, next);
//     next();
// })
// app.use(corsMiddleware);


// routes ..
ConfigRoutes(app);

// app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`The Ln kodKod-Test server is now running ,,, port:${PORT}`);
})