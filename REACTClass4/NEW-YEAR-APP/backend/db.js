const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://harshityd47:lHOxRPWs8DCzhtV0@cohort.vzlt1cl.mongodb.net/Harshit")

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

 const todo = mongoose.model("todos", TodoSchema);

 module.exports = {
    todo
 }