const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Review = new Schema({
    Name:{
        type:String
    },
    Category:{
        type:String
    },
    SubCategory:{
        type:String
    },
    ChildCategory:{
        type:String
    },
    ProductName:{
        type:String
    },
    Review:{
        type:String
    },
    Date:{
        type:Date
    }
},{collection:'Review'});
module.exports = mongoose.model('Review', Review);
