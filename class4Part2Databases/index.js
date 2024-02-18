const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtpw = "123123123";

mongoose.connect(
    "mongodb+srv://harshityd47:B2680ujyWILFZLrm@cohort.vzlt1cl.mongodb.net/userAppNew"
)

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

const app = express();
app.use(express.json());

function userExists(username, password){
    // write logic to return true or false if user exists
    // in DB    
   const userExists =  ALL_USERS.find( user => {
    return (user.username === username) && (user.password === password)
   });
   if(userExists)
    return true;
   else
    return false;
}

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({email: username});

    if(existingUser){
        return res.status(400).send("USER ALREADY EXISTS.")
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    });

    await user.save();
    res.json({
        "msg": "User created successfully"
    });

});


app.get("/signin", (req, res) => {
    const token = req.headers.authorization;
    let username;
    try{
        const decoded = jwt.verify(token, jwtpw);
        username = decoded.username;
        // return list of users other than his username
    } catch(err){
        return res.status(403).json({
            msg: "Invalid Token"
        });
    }
    const retUsers = ALL_USERS.filter(user => user.username !== username);
    res.json({
        users: retUsers
    });
});

app.listen(PORT, () => {
    console.log("server is running at port "+PORT+", http://localhost:"+PORT);
})