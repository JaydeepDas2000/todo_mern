import express from "express";

import connection from './database/db.js';

const app = express();

const PORT = 8080;

connection();

app.listen(PORT, () => console.log(`Your server is running successfully on port : ${PORT}`));