import { handlReadRequesting ,handlReadRequestingPostById} from "../controllers/PostsCTRL.js";

export default function ConfigRoutes(app) {

    app.get('/read', (req, res, next) => {
        console.log(`\nvalid: /read\n`);
        next();
    }, handlReadRequesting);
    
    app.get('/read/:idPost', (req, res, next) => {
        console.log(`\nvalid: /read/:idPost\n`);
        next();
    }, handlReadRequestingPostById);



    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}

