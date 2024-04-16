const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
    // get all todos from db
    const todos = await todo.find({});
    res.json({todos});
});

app.post("/todo", async (req, res) => {
    // post a new todo
    const createPayload = req.body;
    console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid Input"
        });
        return;
    }
    await todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    });
    res.json({
        msg: "new todo added!"
    });
});

app.put("/completed", async (req, res) => {
    // mark a todo as completed.
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid Input"
        });
        return;
    }
    await todo.findOneAndUpdate({_id: req.body.id}, {completed: true});
    res.json({
        msg: "Todo marked as compledted"
    });
});

app.listen(PORT, () => console.log("BE sv running at : http://localhost:"+PORT));