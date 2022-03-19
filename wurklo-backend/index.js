import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import errorHandler from './middleware/error.js';
import connectDB from './config/db.js';
import cors from 'cors';

// route files
import works from './routes/work.js';
import wurkerRoutes from './routes/wurker.js';

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
app.use('/api/v1/wurker', wurkerRoutes);

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