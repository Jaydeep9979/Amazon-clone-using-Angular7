const mongoose = require('mongoose');
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
let Subcategory = new Schema({
  subcategory:
  {
      type:String,
      unique:true
  },
  category:
  {
      type:String,
      ref:'category'
  },

},{
    collection: 'subcategory'
});


module.exports = mongoose.model('subcategory', Subcategory);