import connectDB from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json(
      { message: "Products fetched successfully", data: products },
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
