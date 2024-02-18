const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpw = "123123"
const PORT = 3000;

 const app = express();
app.use(express.json())

 const ALL_USERS = [
    {
        username: "harshityadav47@gmail.com",
        password: "123123",
        name: "Harshit Yadav"
    },
    {
        username: "pyadav@gmail.com",
        password: "123321",
        name: "Pooja Yadav"
    },
    {
        username: "amarsingh@gmail.com",
        password: "112233",
        name: "Amar Singh"
    }
 ];

 function userExists(username, password){
    // write logic to return true or false if user exists
    // in ALL_USERS array    
   const userExists =  ALL_USERS.find( user => {
    return (user.username === username) && (user.password === password)
   });
   if(userExists)
    return true;
   else
    return false;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist"
        });
        
    }

    var token = jwt.sign({username: username}, jwtpw);
    return res.json({
        token,
    });

});


app.get("/users", (req, res) => {
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