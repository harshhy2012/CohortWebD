var user = {
    name: "harikirat",
    kidneys: [{
        healthy: false
    }]
};

var users = [{
    name: 'John',
    kidneys: [{
        healthy: true
    },
    {
        healthy: false
    }]
}];

const express = require("express");

const app = express(); // creating a hospital

app.use(express.json());

const userKidneyDetails = () => {
    const userKidneys = users[0].kidneys;
    const numOfKidneys = userKidneys.length;
    const healthyKidneys = userKidneys.reduce((acc, curr) => {
        if(curr.healthy)
            acc++;
        return acc;
    }, 0);
    const unhealthyKidneys = userKidneys.length-healthyKidneys;
    return {
        numOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    }
}

app.get('/', (req, res) =>{
    const userName = users[0].name;
    const kidneyDetails = userKidneyDetails();
    res.json({
        userName,
        numOfKidneys: kidneyDetails.numOfKidneys,
        healthyKidneys: kidneyDetails.healthyKidneys,
        unhealthyKidneys: kidneyDetails.unhealthyKidneys
    });
});

app.post('/', (req, res) =>{
    const isHealthy = req.body.isHealthy;
   
    if(isHealthy){
        users[0].kidneys.push({
            healthy: true
        });
    } else{
        users[0].kidneys.push({
            healthy: false
        });
    }

    res.json({
        msg: 'DONE!'
    });
});

app.put('/', (req, res) =>{
    // fix all unhealthy kidneys
    const kidneyDetails = userKidneyDetails();
    if(kidneyDetails.unhealthyKidneys == 0 ){
        res.status(411).json({
            err: 'wrong input, no unhealthy Kidneys to fix'
        })
    } else{
        users[0].kidneys.map(kidney => {
            kidney.healthy = true;
            return kidney;
        })  
    }
    
    res.json('DONE!');
});

app.delete('/', (req, res) =>{
    //delete all unhealthy Kidneys
    const kidneyDetails = userKidneyDetails();
    if(kidneyDetails.unhealthyKidneys == 0 ){
        res.status(411).json({
            err: 'wrong input, no unhealthy Kidneys to remove'
        })
    } else{
        users[0].kidneys = users[0].kidneys.filter((kidney) => {
            return kidney.healthy;
        });
    
        res.json({
            msg: 'DELETED!'
        })
    }
   
});
const input = [1,2,3,4,5]

const newArr = input.map((num) => {
    return num*2;
});
console.log(newArr);

app.listen(3000); // doctor is in room

// const sum = n =>{
//     let ans =0;
//     for(let i=1; i<=n;i++){
//         ans+=i;
//         console.log(ans);
//     }
//     return ans;
// }

// app.get('/', (req, res) => {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send('hi your ans is '+ans);
// });
//w 


