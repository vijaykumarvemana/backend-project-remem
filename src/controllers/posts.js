import express from 'express';
import createHttpError from 'http-errors';

import MessagePost from '../models/messagePost.js';


const router = express.Router();

export  const createPost = async(req, res, next) => {

    try {
    const newPost = new MessagePost(req.body);
    const {_id} = await newPost.save();
    res.status(201).send({ _id });
    }
    catch (err) {
        next(createHttpError(500, err.message));
    }
}


export const getPosts = async (req, res, next) => {
    try {
        const posts = await MessagePost.find();
        res.status(200).send(posts);
    }
    catch (err) {
        next(createHttpError( 500, err));
    }
}   // getPosts

export default router;