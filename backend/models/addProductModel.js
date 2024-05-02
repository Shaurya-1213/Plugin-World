const { model, Schema } = require('../connection');

const mySchema = new Schema({
  email : { type:String, unique:true }, // email is required and must be unique
  submittedAt: {type : Date, default: Date.now}
});

module.exports=model('addproduct',mySchema);