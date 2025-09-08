import { handlReadRequesting } from "../controllers/PostsCTRL.js";

export default function ConfigRoutes(app) {

    app.get('/read', (req,res,next) => {
        console.log('');
        console.log(`hii route`);
        console.log('');
        next();
    }, handlReadRequesting);



    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}

