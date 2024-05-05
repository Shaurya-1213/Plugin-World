const { model, Schema } = require('../connection');

const mySchema = new Schema({
  title:{ type: String , required: true },
  brand:{ type: String , required: true },
  model:{ type: String , required: true },
  features:{ type: String , required: true },
  price:{ type: Number , required: true },
  offer:{ type: String , required: true },
  description:{ type: String , required: true },
  images:{ type: Array , required: true },
  createdAt: {type : Date, default: Date.now}
});

module.exports=model('product',mySchema);