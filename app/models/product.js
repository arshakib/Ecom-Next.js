import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// ✅ Check if the model already exists before defining it
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
