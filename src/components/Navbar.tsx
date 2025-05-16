"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // You can replace this logic with proper auth state (e.g., from cookies/context)
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <nav className="bg-gray-50 px-16 py-4 shadow-2xl sticky flex justify-between items-center top-0 z-50">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">SeaFood</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-bold">
        <li className="hover:text-white hover:px-2 hover:bg-blue-600 hover:rounded-lg transition">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-white px-2 hover:bg-blue-600 hover:rounded-lg transition">
          <Link href="/products">Products</Link>
        </li>
        <li className="hover:text-white px-2 hover:bg-blue-600 hover:rounded-lg transition">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-white px-2 hover:bg-blue-600 hover:rounded-lg transition">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Icons */}
      <ul className="flex space-x-6 text-2xl">
        <li>
          <Link href="/favorate">
            <FaHeart className="text-red-500 hover:scale-110 transition" />
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <IoCart className="text-blue-500 hover:scale-110 transition" />
          </Link>
        </li>
        <li>
          <Link href={isLoggedIn ? "/profile" : "/login"}>
            <CgProfile className="text-blue-500 hover:scale-110 transition cursor-pointer" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
