//app/api/products/route.ts
import connectDB from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    // Convert Buffer image data to base64 string for each product
    const productsWithImages = products.map((product) => {
      let imageBase64 = "";
      if (product.image && product.image.data) {
        const base64 = product.image.data.toString("base64");
        imageBase64 = `data:${product.image.contentType};base64,${base64}`;
      }

      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: imageBase64,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      };
    });

    return NextResponse.json(
      { message: "Products fetched successfully", data: productsWithImages },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
