import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connection from './database/db.js';

import Routes from './routes/route.js';

const app = express();

app.use(cors());

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use('/', Routes);

const PORT = 8080;

connection();

app.listen(PORT, () => console.log(`Your server is running successfully on port : ${PORT}`));