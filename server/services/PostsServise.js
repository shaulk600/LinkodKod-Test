import { readFileSync, writeFileSync } from 'fs';

const urlDB = '../DB/Posts.tst'

export function readFileS() {
    fs.readFile(urlDB, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return { success: 'failed', dataMessage: err };
        }
        if (data) {
            return { success: 'success', dataMessage: data };

        }
    });
}

export function writeAllPosts(dataToWrite) {
    const data = JSON.stringify(dataToWrite);
    const res = writeFileSync(urlDB, data, { encoding: 'utf-8' });
    return res;
}

// read:
export function readPosts() {
    const res = readFileS();
    if (res.success === 'success') {
        const data = JSON.parse(res.dataMessage);
        return { status: 'ok', data: data };
    }
    else {
        const err = res.dataMessage
        return { status: 'failed', data: err };
    }
}


