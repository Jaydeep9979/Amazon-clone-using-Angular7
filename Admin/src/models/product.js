const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Product = new Schema({
 
  category:
  {
      type:String,
      ref:'category'
  },
  subcategory:
  {
      type:String,
      ref:'subcategory'
  },
  childcategory:
  {
      type:String,
      ref:'childcategory'
  },
  product:
  {
      type:String
    
  },
  price:
  {
      type:String
      
  },
  desc:
  {
      type:String

  },
  img:
  {
      type:String
  },
  img1:
  {
    type:String   
  },
  img2:
  {
      type:String
  },
  img3:
  {
      type:String
  }

},{
    collection: 'product'
});


module.exports = mongoose.model('product', Product);