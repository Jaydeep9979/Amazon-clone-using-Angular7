const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let UserRegister=new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Password:{
        type:String
    },
    Email:{
        type:String
    },
    PhoneNo:{
        type:Number
    }
},{collection: 'UserRegister'});
module.exports = mongoose.model('UserRegister',UserRegister);