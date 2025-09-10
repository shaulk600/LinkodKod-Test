import { handlReadRequesting, handlReadRequestingPostById, handleCreateNewPost } from "../controllers/PostsCTRL.js";

export default function ConfigRoutes(app) {

    app.get('/read', (req, res, next) => {
        console.log(`\nvalid: /read\n`);
        next();
    }, handlReadRequesting);

    app.get('/read/:idPost', (req, res, next) => {
        console.log(`\nvalid: /read/:idPost\n`);
        next();
    }, handlReadRequestingPostById);

    app.post('/initPost/', (req, res, next) => {
        console.log(`\n valid: /initPost/ \n`);
        next();
    }, handleCreateNewPost);

    // login
    app.post('/login', (req, res, next) => {
        console.log(`\n valid: /login/ \n`);
        next();
    },  );
    app.post('/register:idmanager', (req, res, next) => {
        console.log(`\n valid: /register/ \n`);
        next();
    },  );


    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}

