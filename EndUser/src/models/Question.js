const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Question = new Schema({
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
    Question:{
        type:String
    },
    Answer:{
        type:String
    }
},{collection:'Question'});
module.exports = mongoose.model('Question', Question);
