import { readFile, writeFileSync } from 'fs';

const urlDB = './DB/Posts.txt'


export async function readFileS() {
    let resMessage = { success: '', dataMessage: '' };

    readFile(urlDB, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            resMessage = { success: 'failed', dataMessage: err };
            console.log(`resMessage data:${resMessage.success} - ${resMessage.dataMessage}`);
            return resMessage;
        }
        if (data) {
            resMessage = { success: 'success', dataMessage: data };
            console.log(`resMessage err:${resMessage.success}`);
            return resMessage;

        }
    });
    return resMessage;

}

export function writeAllPosts(dataToWrite) {
    const data = JSON.stringify(dataToWrite);
    const res = writeFileSync(urlDB, data, { encoding: 'utf-8' });
    return res;
}

// read:
export async function readPosts() {
    let resMessage = { status: '', data: '' };

    const res = await readFileS();
    if (res.success === 'success') {
        const data = JSON.parse(res.dataMessage);
        resMessage = { status: 'ok', data: res.dataMessage };
        return resMessage;
    }
    else {
        const err = res.dataMessage
        resMessage = { status: 'failed', data: res.dataMessage };
        return resMessage;
    }
}


