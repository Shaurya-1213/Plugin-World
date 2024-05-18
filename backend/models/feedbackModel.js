const { model, Schema } = require('../connection');

const mySchema = new Schema({
  firstname : { type: String , required: true },
  lastname : { type: String , required: true },
  email : { type:String, unique:true }, // email is required and must be unique
  company :{type:String,required:true},
  subject : { type: String , required: true },
  message :{type:String,required:true},
  createdAt : { type: Date, default: Date.now}
});

module.exports=model('feedback',mySchema);