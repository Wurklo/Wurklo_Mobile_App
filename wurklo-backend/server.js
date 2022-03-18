const express = require('express');
// import express from 'express';
const dotenv = require('dotenv');
// import dotenv from 'dotenv';
const morgan = require('morgan');
// import morgan from 'morgan';
const colors = require('colors');
// import colors from 'colors';
const errorHandler = require('./middleware/error')
// import errorHandler from './middleware/error';
const connectDB = require('./config/db');
// import connectDB from './config/db';
const cors = require('cors')
// import cors from 'cors';

// route files
const works = require('./routes/work');
// import works from './routes/work';

//load env vars
dotenv.config({ path: './config/config.env' });

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(cors());

//dev logging middle ware
if (process.env.NODE_ENV === 'development') {

    app.use(morgan('dev'));
}

//mount routers
app.use('/api/v1/works', works);

app.use(errorHandler);
const server = app.listen(PORT, console.log("Server is running in port: ".yellow.bold, PORT));

// Handle undhandled promise rejections - kill app
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // close server and exit process
    // .exit(1) = exit with a `failure`
    server.close(() => {
        process.exit(1);
    });
});