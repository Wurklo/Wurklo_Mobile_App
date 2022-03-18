const mongoose = require('mongoose');
// import mongoose, { connect } from 'mongoose';

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB is Connected : ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;
// export default connectDB;