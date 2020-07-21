const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Childcategory = new Schema({
  childcategory:
  {
      type:String,
      unique:true
  },
  subcategory:
  {
      type:String,
      ref:'subcategory'
  },
  category:
  {
      type:String,
      ref:'category'
  },

},{
    collection: 'childcategory'
});

module.exports = mongoose.model('childcategory', Childcategory);