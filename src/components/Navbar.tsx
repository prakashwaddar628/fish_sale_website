'use client';

import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 px-16 py-4 shadow-2xl flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">SeaFood</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-bold hovrer:text-blue-600">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Icons */}
      <ul className="flex space-x-6 text-2xl">
        <li>
          <FaHeart className="text-red-500 hover:scale-110 transition" />
        </li>
        <li>
          <IoCart className="text-blue-500 hover:scale-110 transition" />
        </li>
        <li>
          <CgProfile className="text-blue-500 hover:scale-110 transition" />
        </li>
      </ul>
    </nav>
  );
}
