import connectDB from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const priceString = formData.get("price") as string;
    const price = parseFloat(priceString);
    const description = formData.get("description") as string;
    const file = formData.get("image") as File;

    if (!name || !priceString || isNaN(price) || !description || !file) {
      return NextResponse.json(
        { message: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "Uploaded file must be an image." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const newProduct = new Product({
      name,
      price,
      description,
      image: {
        data: buffer,
        contentType: file.type,
      },
    });

    await newProduct.save();

    return NextResponse.json(
      { message: "Product added successfully", data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
