export function corsInWeb(req,res,next) {
    // Basic CORS middleware
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // Handle preflight OPTIONS requests
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
        next();
    });

}
