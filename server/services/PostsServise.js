import { readFileSync, writeFileSync } from 'fs';
const urlDB = '../DB/Posts.tst'

export function readAllPosts() {
    const res = readFileSync(urlDB, { encoding: 'utf-8' });
    const data = JSON.parse(res);
    return data;
}

export function writeAllPosts(dataToWrite) {
    const data = JSON.stringify(dataToWrite);
    const res = writeFileSync(urlDB, data, { encoding: 'utf-8' });
    return res;
}