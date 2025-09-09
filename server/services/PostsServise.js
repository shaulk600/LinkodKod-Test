import fs from 'fs/promises';


const urlDB = './DB/Posts.txt'

export async function readPostsFile() {
    // console.log(`\n-- Log Flow: postServises\n  function readPostsFile: `);
    // return new Promise((resolve, reject) => {
    //     fs.readFile(urlDB, 'utf-8', function(err, data) {
    //         if (err) {
    //             console.log('err', err);
    //             reject(err);
    //         }
    //         console.log('data', data);
    //         resolve(data);
    //     });
    // });
    console.log(`\n-- Log Flow: postServises\n  function readPostsFile: `);
    try{
    return await fs.readFile(urlDB,'utf-8');
    }catch(err){
        console.log('Err is: ',err);
    }
}


export async function writeAllPosts(dataToWrite) {
    console.log(`\n-- Log Flow: postServises\n  function writeAllPosts: `);
    const res = ''
    try {
        res = await fs.writeFile(urlDB, dataToWrite, 'utf-8');
        return await res;
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
        return await resMessage;
    } catch (err) {
        console.log(`Log Error: \n function readPosts:  catch  \n the meassage: ${err}`);
        resMessage = { status: 'failed', data: err };
        return await resMessage;
    }
}


