'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const productList = [
  {
    id: 1,
    name: "Bangdo Fish",
    image: "/images/products/bangdo.jpeg",
    price: "₹300/kg",
    description: "Fresh Bangdo fish from the local fishery.",
  },
  {
    id: 2,
    name: "Prawns",
    image: "/images/products/prawns.jpeg",
    price: "₹450/kg",
    description: "High-quality prawns, cleaned and ready to cook.",
  },
  {
    id: 3,
    name: "Bangdo Fish",
    image: "/images/products/bangdo.jpeg",
    price: "₹300/kg",
    description: "Fresh Bangdo fish from the local fishery with an extended description to demonstrate text truncation in action.",
  },
  {
    id: 4,
    name: "Prawns",
    image: "/images/products/prawns.jpeg",
    price: "₹450/kg",
    description: "High-quality prawns, cleaned and ready to cook.",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-[83vh] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-start mb-10">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {productList.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer h-[350px] flex flex-col">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={200}
                    className="mx-auto rounded-lg mb-4 flex-shrink-0"
                  />
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600 flex-grow overflow-hidden line-clamp-3">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold mt-2">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
