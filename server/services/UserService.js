// import {  } from "module"; 
import fs from 'fs/promises';

const urlDB = './DB/Users.txt';
const urlDBAdmin = './DB/Admin.txt';


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
export async function CheckUser(dataToSend) {
    console.log(`\n-- Log Flow: UserService\n  function CheckUser: `);
    let isOk = { status: '' };
    try {
        if (dataToSend && dataToSend['username'] && dataToSend['password']) {
            const dataF = await readAllUsers();
            if (dataF[0] === "[" && dataF[dataF.length - 1] === "]") {
                const usersArr = JSON.parse(dataF);
                for (let i = 0; i < usersArr.length; i++) {
                    if (usersArr[i].username === dataToSend.username && usersArr[i].password === dataToSend.password) {
                        return isOk = { status: 'ok' };
                    }
                }
                return isOk = { status: 'failed' };
            }
        }
    } catch (ErrLogs) {
        console.log(`\n-- Log Error: UserService\n  function CheckUser:  -- catch-- \n`);
        isOk = { status: 'failed' };
        return isOk;
    }
}
// --option = create Token - JWT module
// -- option = enecription - Bcrypt Module

/**
 * 
 * @returns {object}status: 'ok'/'failed'
 */
export async function createUser(dataToSend) {
    console.log(`\n-- Log Flow: UserService\n  function createUser: `);
    let isOk = { status: '' };
    try {
        if (dataToSend && dataToSend['username'] && dataToSend['password'] && dataToSend['email']) {
            // read admin = IDmanager
            const resAdmin = await fs.readFile(urlDBAdmin, 'utf-8');
            const dataAdmin = JSON.parse(resAdmin);
            for (let i = 0; i < dataAdmin.length; i++) {
                if (dataToSend[idmanager] === dataAdmin[i].role) {
                    // read users
                    const resUsers = await writeAllUsers(); // Become an absentee function
                    const dataUsers = JSON.parse(resUsers); // Become an absentee function
                    // send
                    dataUsers.push(dataToSend);
                    const resWrite = await writeAllUsers();
                    if (resWrite === v) {
                        isOk = { status: 'ok' };
                        return isOk;
                    }
                }
            }
        }
        isOk = { status: 'failed' };
        return isOk


    } catch (ErrLogs) {
        console.log(`\n-- Log Error: UserService\n  function createUser:  -- catch-- \n`);
        isOk = { status: 'failed' };
        return isOk;
    }
}