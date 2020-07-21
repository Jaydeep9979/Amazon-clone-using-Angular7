const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
  email:
  {
      type:String,
      unique:true
  },
  password: {
    type: String
  },
},{
    collection: 'admin'
});

module.exports = mongoose.model('Admin', Admin);