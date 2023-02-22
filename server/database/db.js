import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_USERNAME;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.qaysjre.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI, { useNewUrlParser : true });

    mongoose.connection.on('connected', () => {
        console.log('DB up and running');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('DB down and not running');
    })

    mongoose.connection.on('error', () => {
        console.log('Facing Error.... ', error.message);
    })
}

export default Connection;