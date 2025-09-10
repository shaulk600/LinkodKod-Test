// import {  } from "module"; 
import fs from 'fs/promises';

const urlDB = './DB/Users.txt';


async function readAllUsers() {
    console.log(`\n-- Log Flow: UserService\n  function readAllUsers: `);
    try {
        return await fs.readFile(urlDB, 'utf-8');
    } catch (ErrLogs) {
        console.log(`\n-- Log Error: UserService\n  function readAllUsers:  -- catch-- \n`);
        return [''];
    }
}

async function writeAllUsers(dataToWrite) {
    console.log(`\n-- Log Flow: UserService\n  function writeAllUsers: `);
    const res = ''
    try {
        return await fs.writeFile(urlDB, dataToWrite, 'utf-8');
    }
    catch (err) {
        console.log(`\n-- Log Error: UserService\n  function writeAllUsers:  -- catch-- \n`);
        return res; //  = ''
    }
}


// read:
/**
 * 
 * @returns {object}status: 'ok'/'failed', data: data/err
 */
export async function readUsers() {
    console.log(`\n-- Log Flow: UserService\n  function readUsers: `);
    let resMessage = { status: '', data: '' };
    try {
        const res = await readAllUsers();
        console.log('function readUsers: res= ', res);
        if (res === '') {
            resMessage = { status: 'failed', data: `res is undefined` };
        }
        if (res[0] === "[" && res[res.length - 1] === "]") {
            resMessage = { status: 'ok', data: res };
        } else {
            resMessage = { status: 'ok', data: '[isEmpty]' };
        }
        return resMessage;

    } catch (ErrLogs) {
        console.log(`\n-- Log Error: UserService\n  function readUsers:  -- catch-- \n`);
        resMessage = { status: 'failed', data: err };
        return resMessage;
    }

}


/**
 * 
 * @returns {object}status: 'ok'/'failed'
 */
export async function CheckUser(username, pass) {
    console.log(`\n-- Log Flow: UserService\n  function CheckUser: `);
    let isOk = { status: '' };
    try {
        const res = await readUsers();
        const data = res['data'] | [""];
        // נדרש להשלים



    } catch (ErrLogs) {
        console.log(`\n-- Log Error: UserService\n  function CheckUser:  -- catch-- \n`);
        isOk = { status: 'failed' };
        return resMessage;
    }
}
// --option = create Token - JWT module
// -- option = enecription - Bcrypt Module


export async function createUser(dataToSend) {
    console.log(`\n-- Log Flow: UserService\n  function createUser: `);
}