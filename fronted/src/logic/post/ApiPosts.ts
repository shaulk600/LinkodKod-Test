import { readFileSync, writeFileSync } from 'fs';
const urlDB = '../../'

export function readAllPosts() {
    const res: string = readFileSync(urlDB, { encoding: 'utf-8' });
    const data: string[] = JSON.parse(res);
    return data;
}

export function writeAllPosts(dataToWrite: string[]) {
    const data = JSON.stringify(dataToWrite);
    const res = writeFileSync(urlDB, data, { encoding: 'utf-8' });
    return res;
}