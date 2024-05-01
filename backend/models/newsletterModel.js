const { model, Schema } = require('../connection');

const mySchema = new Schema({
  email : { type:String, unique:true }, // email is required and must be unique
});

module.exports=model('newsletter',mySchema);