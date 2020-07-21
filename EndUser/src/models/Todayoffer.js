const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let Todayoffer=new Schema({
  idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
  },
  Original_Price:{
      type:String
  },
  Discount_Price:{
      type:String
  },
  Product_Name:{
      type:String
  },
  Image:{
    data: Buffer, 
    contentType: String
  }
},{collection: 'Todayoffer'});
module.exports = mongoose.model('Todayoffer',Todayoffer);