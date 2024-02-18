const express = require("express");
const z = require("zod");
const app = express();
const PORT = 3000;
/* ugly way of doing checks is doing it all in the get function for every get route.
   this voilates the DRY methodology and is hard to read and debug as well. */
// app.get("/health-checkup", (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(!(username === "harshit" && password === "pass")){
//         res.status(403).json({
//             "msg": "Wrong username/password"
//         });
//         return;
//     } 
//     if(kidneyId != 1 && kidneyId != 2){
//         console.log(kidneyId);
//         res.status(400).json({"msg" : "something is up with your inputs."});
//         return; 
//     }
    
//     res.json({
//         "msg" : "You are healthy and your kidneys are normal"
//     });
// });


/* now with middlewares */

const schema = z.array(z.number());

/* suppose you want a json as input which has email, pass, and countty
   how to write schema for that */

const schema2 = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US"))
});

app.use(express.json());

app.post("/health-checkup", (req, res) =>{
    //you have array of kidneys, eg: [1, 2];
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    });

    const kidneyLength = kidneys.length;
    
    res.send("your Kidney" + kidneyLength + " kidneys");
}) 

app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}, URL: http:localhost:/${PORT}`);
});