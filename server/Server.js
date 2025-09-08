import express from "express";
import { config } from "dotenv";
import cors from "cors";
config({path: "../.env"});

import ConfigRoutes from "./routes/ConfigRoutes.js";

const app = express();
const PORT = process.env.PORT | 3002;

app.use(cors())
app.use(express.json());
app.use(express.static('./public'));

// Basic CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight OPTIONS requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

// routes ..
ConfigRoutes(app);

app.listen(PORT, () => {
    console.log(`The Ln kodKod-Test server is now running ,,, port:${PORT}`);
})