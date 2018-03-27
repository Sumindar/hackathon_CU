const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectorschem = new Schema({
  sector:String
})

sectorschema.set('toJSON',{getters : true , virtuals:true});
mongoose.model('Sector',sectorschema);
