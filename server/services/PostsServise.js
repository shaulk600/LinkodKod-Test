import { readFile, writeFileSync } from 'fs';

const urlDB = '../DB/Posts.tst'


export function readFileS() {
    const resMessage = {success:'',dataMessage:''};

    readFile(urlDB, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return resMessage = { success: 'failed', dataMessage: err };
        }
        if (data) {
            return resMessage = { success: 'success', dataMessage: data };

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
    const resMessage = {status:'',data:''};

    const res = readFileS();
    if (res.success === 'success') {
        const data = JSON.parse(res.dataMessage);
        return resMessage = { status: 'ok', data: data };
    }
    else {
        const err = res.dataMessage
        return resMessage = { status: 'failed', data: err };
    }
}


