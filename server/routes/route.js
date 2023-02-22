import express  from "express";

import { addTodo } from "../controller/todo-controller.js";

const route = express.Router();

// route.post('/todos', (req, res) => {
//     console.log(req.body);
// })

route.post('/todos', addTodo)

export default route