const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoURI = "mongodb://192.168.1.15:27017/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
