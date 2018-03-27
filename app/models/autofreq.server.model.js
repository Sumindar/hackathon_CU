const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autofreqschema = new Schema({
  sector:String,
  autoid:{
    type:String,
    match:[/.+\@.+\..+/ , "Please fill a valid e-mail address"]
  }
})

autofreqschema.set('toJSON',{getters : true , virtuals:true});
mongoose.model('Auto',autofreqschema);
