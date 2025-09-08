import express from "express";
//services:
import { readPosts } from "../services/PostsServise.js";



export async function handlReadRequesting(req, res) {

    console.log('');
    console.log(`hii CTRLRequest`);
    console.log('');

    const handlingRead = await readPosts();
    if (handlingRead.status === 'ok') {
        
        console.log('');
        console.log(`hii CTRLRequest - res data`);
        console.log('');

        res.status(200).json(handlingRead.data);
    }
    if (handlingRead.status === 'failed') {
        console.log('');
        console.log(`hii CTRLRequest - res Err`);
        console.log('');

        console.log(`Error log: Post Controller: \n An error occurred while retrieving data from a DB file \n Error type: Server`);
        console.log('the message is: ', handlingRead.data);
        res.sendStatus(502);
    }
}
