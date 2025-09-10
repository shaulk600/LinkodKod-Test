import { handlReadRequesting, handlReadRequestingPostById, handleCreateNewPost } from "../controllers/PostsCTRL.js";
import { HandleUserRegistration, handleLoginUser } from "../controllers/UserCTRL.js";

export default function ConfigRoutes(app) {

    app.get('/read', handlReadRequesting);
    app.get('/read/:idPost', handlReadRequestingPostById);
    app.post('/initPost/', handleCreateNewPost);

    // login
    app.post('/login', handleLoginUser);
    app.post('/register:idmanager', HandleUserRegistration);


    app.use('/', (req, res) => {
        res.status(200).json({ msg: 'OK' })
    });


}

