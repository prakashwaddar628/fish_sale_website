import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
