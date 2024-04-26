const { model, Schema } = require('../connection');

const mySchema = new Schema({
  username : { type: String , required: true },
  email : { type:String, unique:true }, // email is required and must be unique
  password : String,
  createdAt : { type: Date, default: Date.now}
});

module.exports=model('user',mySchema);