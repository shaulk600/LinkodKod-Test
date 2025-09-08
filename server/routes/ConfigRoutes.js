import { handlReadRequesting } from "../controllers/PostsCTRL.js";
export default function ConfigRoutes(app) {

    app.get('/read/',handlReadRequesting);



    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}

