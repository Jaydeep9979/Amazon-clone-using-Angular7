const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema({

  category:
  {
      type:String,
      unique:true
  },
 
},{
    collection: 'category'
});

module.exports = mongoose.model('Category', Category);