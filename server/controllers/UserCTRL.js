import { CheckUser, createUser, readUsers } from "../services/UserService.js";

export async function handleLoginUser(req, res) {
    console.log(`\n-- Log Flow: CTRLPosts\n  function handleLoginUser: `);
    try {
        const objData = req.body;
        const resData = await CheckUser(objData);
        if (resData['status'] === 'ok') {
            // This is where the reference to Token should come from.
            res.status(200).json({ status: 'Entry approved' });
        }
        else {
            // Optional:
            // const logObstruction = {
            //     // ip : req.___,//Completion is required
            //     url: req.url,
            // }
            res.status(403).json({ status: 'Not approved entry' });
        }
    } catch (ErrLogs) {
        console.log(` Log Error: \n  function handleLoginUser:  -catch-  \n   the meassage: ${ErrLogs}`);
        res.sendStatus(500);
    }
}

export async function HandleUserRegistration(req, res) {
    console.log(`\n-- Log Flow: CTRLPosts\n  function HandleUserRegistration: `);
    try {
        const objUserData = req.body;
        const resCreateUserData = await createUser(objUserData);
        if (resData['status'] === 'ok') {
            // This is where the reference to Token should come from.
            res.status(200).json({ status: 'Entry approved' });
        }
        res.status(403).json({ status: 'No complete details or no administrator has been entered to allow a new user to be added.' });

    } catch (ErrLogs) {
        console.log(` Log Error: \n  function HandleUserRegistration:  -catch-  \n   the meassage: ${ErrLogs}`);
        res.sendStatus(500);
    }
}