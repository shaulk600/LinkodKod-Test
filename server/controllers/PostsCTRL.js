import express, { request } from "express";
//services:
import { readPosts, readPostById } from "../services/PostsServise.js";


request.params

export async function handlReadRequesting(req, res) {
    console.log(`\n-- Log Flow: CTRLPosts\n  function handlReadRequesting: `);
    try {
        const handlingRead = await readPosts(); //{let resMessage = { status: 'ok/failed', data: '' };}
        console.log(handlingRead);

        if (!handlingRead['status'] && !handlingRead['data']) {
            console.log(` Log Flow: CTRLPosts\n  function handlReadRequesting: \n  throw Error  \n   msg: !handlingRead.status && !handlingRead.data \n   Error: Obj returned`);
            res.status(400).json({ msg: 'Error: Obj returned' });
        }
        else {
            if (handlingRead.status === 'ok') {
                console.log(` Log Flow: CTRLPosts\n  function handlReadRequesting: \n  handlingRead.status returned -ok- :  \n   the meassage: ${handlingRead.data}.`);
                res.status(200).json(`${handlingRead.data}`);
            }
            else if (handlingRead.status === 'failed') {
                console.log(` Log Flow: CTRLPosts\n  function handlReadRequesting: \n  handlingRead.status returned -failed- :  \n   the meassage: ${handlingRead.data}.`);
                res.status(400).json({ msg: `${handlingRead.data}` });
            }
        }
    }
    catch (err) {
        console.log(` Log Error: \n  function handlReadRequesting:  -catch-  \n   the meassage: ${err}`);
        res.sendStatus(500);
    }
}



export async function handlReadRequestingPostById(req, res) {
    console.log(`\n-- Log Flow: CTRLPosts\n  function handlReadRequestingPostById: \n`);
    try {
        const idPost = req.params;
        console.log('idPost:', idPost);

        if (idPost) {
            const data = await readPostById(idPost);
            console.log('data', data); //undefine currect
            console.log(` Log Flow: CTRLPosts\n  function handlReadRequestingPostById: \n   > data > `);
            const post = data['result'];
            if (post.a) {
                console.log(` Log Flow: CTRLPosts\n  function handlReadRequestingPostById: \n   > data > post > \n   obj falid  :( `);
                // faild
                console.log('post: ', post)
            }
            console.log(` Log Flow: CTRLPosts\n  function handlReadRequestingPostById: \n   > data > post > \n   obj success !!! :) `);



        }


    } catch (errLogs) {
        console.log(` Error Log: \n  function handlReadRequestingPostById:  -catch-  .\n   the meassage: ${errLogs}`);
        res.sendStatus(500);
    }
}
