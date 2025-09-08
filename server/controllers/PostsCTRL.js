import express from "express";
//services:
import { readPosts } from "../services/PostsServise.js";



export function handlReadRequesting(req, res) {
    const handlingRead = readPosts();
    if (handlingRead.status === 'ok') {
        res.status(200).json(handlingRead.data);
    }
    else {
        console.log(`Error log: Post Controller: \n An error occurred while retrieving data from a DB file \n Error type: Server`);
        console.log('the message is: ', handlingRead.data);
        res.sendStatus(502);
    }
}
