import fs from 'fs/promises';


const urlDB = './DB/Posts.txt'

export async function readPostsFile() {
    try {
        console.log(`\n-- Log Flow: postServises\n  function readPostsFile: `);
        return await fs.readFile(urlDB, 'utf-8');
    } catch (err) {
        console.log('Err is: ', err);
    }
}


export async function writeAllPosts(dataToWrite) {
    console.log(`\n-- Log Flow: postServises\n  function writeAllPosts: `);
    const res = ''
    try {
        return await fs.writeFile(urlDB, dataToWrite, 'utf-8');
    }
    catch (err) {
        res = 'no';
        return res;
    }

}


// read:
/**
 * 
 * @returns {object}status: 'ok'/'failed', data: data/err
 */
export async function readPosts() {
    console.log(`\n--test Log Flow: ServicesPost\n  function readPosts: `);
    let resMessage = { status: '', data: '' };
    try {
        console.log('function');
        const res = await readPostsFile();
        console.log('function readPosts: res= ', res);
        if (res === '') {
            resMessage = { status: 'failed', data: `res is undefined` };
        }
        // send to valid הפיכה לגייסון וחזרה לסטרינג
        if (res[0] === "[" && res[res.length - 1] === "]") {
            resMessage = { status: 'ok', data: res };
        } else {
            resMessage = { status: 'ok', data: '[isEmpty]' };
        }
        return resMessage;
    } catch (err) {
        console.log(`Log Error: \n function readPosts:  catch  \n the meassage: ${err}`);
        resMessage = { status: 'failed', data: err };
        return resMessage;
    }
}

/**
 * 
 * @returns {object}result= post:obj / result= {a:''}
 */
export async function readPostById(idPost) {
    console.log(`\n--Log Flow: ServicesPost\n  function readPostById: `);
    try {
        const res = await readPosts();
        console.log(`   res> v`);
        const data1 = res['data'] | [""]
        const posts = JSON.parse(data1);
        console.log(`   posts> v`);
        //מכאן לא עובד
        let post = { "a": '' }
        for (let i = 0; i < posts.length; i++) {
            console.log('i from for => ', posts[i]);
            if (posts[i].id === idPost) {
                post = posts[i];
                break;
            }
        }
        console.log(`   complate> post.find v`);
        if (post) {
            console.log(`   post> v = if> result !!!! :)`);
            return { result: post };
        }
        else {
            return { result: { a: '' } };
        }

    }
    catch (ErrLogs) {
        console.log(`Log Error: \n function readPostById:  catch  \n the meassage: ${ErrLogs}`);
        res.sendStatus(500);
    }
}

/**
 * 
 * @returns {object} status= ok , data: ?
 */
export async function createNewPost(dataPost) {
    console.log(`\n--Log Flow: ServicesPost\n  function createNewPost: `);
    try {
        //valid
        if (dataPost && dataPost['imageUrl'] && dataPost['description'] && dataPost['likes'] && dataPost['userName'] && dataPost['createdAt']) {
            const resRead = await readPosts();
            const data = JSON.parse(resRead);
            data.push(dataPost);
            const resWrite = await writeAllPosts(data);
            console.log('function createNewPost : resWrite= ', resWrite);
            return { status: 'ok' , data: resWrite };// אמור לחזור משהו בכלל ?

        }
    } catch (ErrLogs) {
        console.log(`Log Error: \n function createNewPost:  catch  \n the meassage: ${ErrLogs}`);
        res.sendStatus(500);
    }
}