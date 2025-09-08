import express from "express";
//services:
import { readPosts } from "../services/PostsServise.js";



export function readPosts(req, res) {
    const res = readPosts();
    if (res.status === 'ok') {
        res.status(200).json(res.data);
    }
    else {
        console.log(`Error log: Post Controller: \n An error occurred while retrieving data from a DB file \n Error type: Server`);
        console.log('the message is: ', res.data);
        res.sendStatus(502);
    }
}
