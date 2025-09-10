import {  request,response} from "express";
import { config } from "dotenv";
config();
// request.ha
export function corsInWeb(req, res, next) {
    // Basic CORS middleware
    app.use((req, res, next) => {
// Access-Control-Allow-Origin
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // Handle preflight OPTIONS requests
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
        next();
    });

}

export const corsMiddleware = (req, res, next) => {
    const allowedOrigin = process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL_PRODUCTION
        : process.env.FRONTEND_URL_LOCAL;
    const origin = req.headers.origin;

    // 1. No ‘Access-Control-Allow-Origin’ Header
    if (origin === allowedOrigin) {
        // res.header("Access-Control-Allow-Origin", origin);
    } else {
        console.log(`Origin mismatch: ${origin} vs ${allowedOrigin}`);
    }

    // 2. Credentials Not Allowed
    res.header("Access-Control-Allow-Credentials", "true");

    // 3. Method Not Allowed
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    // 4. No ‘Access-Control-Allow-Headers’ Header
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // 5. Preflight Request Handling (OPTIONS request)
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
};
