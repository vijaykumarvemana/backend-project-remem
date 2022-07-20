import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import  postRoutes from './routes/posts.js';
import { badRequestHandler, forbiddenHandler, internalServerErrorHandler, notFoundHandler, unauthorizedHandler } from './errorHandles.js';


// create express server

const server = express();
const port = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());


// Routes
server.use('/', postRoutes);


server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(internalServerErrorHandler)
server.use(unauthorizedHandler)
server.use(forbiddenHandler)




// connect to mongodb database using mongoose 

mongoose.connect(process.env.MONGO_URI) 
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
    server.listen(port, () => {
        console.log(`server is listening on port ${port}`);
        console.table(listEndpoints(server));
    });
})
mongoose.connection.on('error', (err) => {  
    console.log(err);
})









