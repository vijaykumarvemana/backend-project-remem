import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';


// create express server

const server = express();
const port = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());



// connect to mongodb database using mongoose 

mongoose.connect(process.env.MONGO_URI) 
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
    server.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    });
})
mongoose.connection.on('error', (err) => {  
    console.log(err);
})









