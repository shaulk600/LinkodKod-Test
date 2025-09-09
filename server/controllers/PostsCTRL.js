import express from "express";
//services:
import { readPosts } from "../services/PostsServise.js";




export async function handlReadRequesting(req, res) {
    console.log(`\n-- Log Flow: CTRLPosts\n  function handlReadRequesting: `);
    try {
        const handlingRead = await readPosts(); //{let resMessage = { status: 'ok/failed', data: '' };}
        console.log(handlingRead);
        
        if (!handlingRead['status'] && !handlingRead['data']) {
            console.log(` Log Flow: CTRLPosts\n  function handlReadRequesting: \n  throw Error  \n   msg: !handlingRead.status && !handlingRead.data \n   Error: Obj returned`);
            res.sendStatus(500);
        }
        else {
            if (handlingRead.status === 'ok') {
                console.log(` Log Flow: CTRLPosts\n  function handlReadRequesting: \n  handlingRead.status returned -ok- :  \n   the meassage: ${handlingRead.data}.`);
                res.status(200).json(handlingRead.data);
            }
            else if (handlingRead.status === 'failed') {
                console.log(` Log Flow: CTRLPosts\n  function handlReadRequesting: \n  handlingRead.status returned -failed- :  \n   the meassage: ${handlingRead.data}.`);
                res.sendStatus(500);
            }
        }
    }
    catch (err) {
        console.log(` Log Error: \n  function handlReadRequesting:  -catch-  \n   the meassage: ${err}`);
        res.sendStatus(500);
    }
}
