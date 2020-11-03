const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/uploadcsv');


const db=mongoose.connection;

db.on('error',console.error.bind(console,'error binding to db'));


db.once('open',function(){
    console.log('Successfully connected to database');
})