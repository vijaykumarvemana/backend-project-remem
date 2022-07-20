import express from 'express';
import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

router.post('/post', createPost);

router.get('/posts', getPosts);

export default router;