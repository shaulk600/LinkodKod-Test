export async function handleLoginUser(req, res) {
    console.log(`\n-- Log Flow: CTRLPosts\n  function handleLoginUser: `);
    try {
        const objData = req.body;

        if (objData['username'] && objData['password']) {
            
        }
    } catch (ErrLogs) {
        console.log(` Log Error: \n  function handleLoginUser:  -catch-  \n   the meassage: ${ErrLogs}`);
        res.sendStatus(500);
    }
}