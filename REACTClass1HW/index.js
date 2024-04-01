const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/interest', (req,res) => {
    
    res.json('chlra hu');

});

app.post('/interest', (req,res) => {
    // input is principal, interest rate and time
    // give back json obj {total amount payable, interest}
    const prin = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
   
    const interest = (prin/100) * rate * time; 
    const total = prin+interest;
    console.log(interest, total);
    const ans = {
        total, interest
    };
    console.log(ans);
    res.json(ans);

});

app.listen(PORT, () => console.log(`BE Running at port: ${PORT}, ye le URL: http://localhost:3001/interest`));