import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String,required: true},
  description: {type: String,required: true},
  price: {type: Number,required: true},
  stock: { type: Number,required: true},
  category: {type: String,required: true},
  images: [String],
  ratings: {type: Number,default: 0},
  reviews: [
    {
      user: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
      rating: {type: Number,required: true},
      comment: {type: String,required: true}
    }
  ]
});

const Product = mongoose.model('Product', productSchema);
 export default Product
