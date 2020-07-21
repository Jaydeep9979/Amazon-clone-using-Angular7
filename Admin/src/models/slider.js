const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Slider = new Schema({
  slider:
  {
      type:String,
      unique:true
  },
  description:
  {
      type:String
    
  },
  img:
  {
      type:String
      
  },
  status:
  {
      type:Number
  }

},{
    collection: 'slider'
});


module.exports = mongoose.model('slider', Slider);