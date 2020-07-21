const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let Product_Details=new Schema({
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
        type:String,
        unique:true
    },
    ProductOriPrice:{
        type:String
    },
    ProductActPrice:{
        type:String
    },
    imgPath:{
        type:String
    },
    productFeature:{
        type:Array
    }
},{collection:"Product_Details"});

module.exports = mongoose.model('Product_Details',Product_Details);