import connectDB from "@/lib/mongoose";
import Signup from "@/models/Signup";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Signup({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return NextResponse.json(
      {
        message: "Signup successful",
        user: {
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
