const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let slider=new Schema({
   slider:{
       type:String
   },
   img:{
       type:String
   }
},{collection:'slider'});
module.exports = mongoose.model('slider', slider);