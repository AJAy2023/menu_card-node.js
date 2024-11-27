
const express  =  require('express');
const app = express();
const db  = require('./db');

// body parse the connection 
const bodyparser = require('body-parser');
const person  = require('./model/person');
app.use(bodyparser.json());  

app.get('/', (req , res)=>{
    res.send(" server is runnig soomthly ");
});

app.post('/menu', async(req , res)=>{
    try{
        const menudata = req.body;

        // now i need to store this thing in db 
        const newdata = new person(menudata);
    
        // whenever your endpoint will hit the database it will  genorate some data  and save 
        const respnese = await newdata.save();
        res.status(200).json(respnese);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
});

app.get('/menudata', async(req, res)=>{
    try{
        const getdata = await person.find();
        res.status(200).json(getdata);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
    
});


app.listen('3000',()=>{
    console.log('server is running') ;
})
