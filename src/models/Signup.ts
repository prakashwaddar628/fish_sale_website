// models/Signup.ts
import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // 🔐 Prevent duplicate registrations
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true, // 🕒 Adds createdAt and updatedAt fields
  }
);

const Signup = mongoose.models.Signup || mongoose.model("Signup", signupSchema);
export default Signup;
