import {  } from "../controllers/";
export default function ConfigRoutes(app) {

    app.get('/read/',);



    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}

