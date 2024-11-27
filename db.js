const mongoos =  require('mongoose');
// url 
const mongoseUrl  = 'mongodb://127.0.0.1:27017'

// checking the connection and data 
mongoos.connect(mongoseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// connection 
const db  = mongoos.connection;

// even listern 

db.on('connected',()=>{
    console.log('connected to mongodb server ');
});

db.on('error' ,(err)=>{
    console.error('mongo connection error', err);
});
db.on('disconnected' ,()=>{
    console.log('mongodb is disconnected');
})
 module.exports = db;

