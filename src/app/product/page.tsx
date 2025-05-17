'use client';

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { toast } from "react-toastify";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const json = await res.json();
        if (res.ok) {
          setProducts(json.data);
        } else {
          console.error("Failed to fetch products:", json.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: Product) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${product.name} added to cart`);
  };

  if (loading) return <div className="text-center py-20">Loading products...</div>;

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-[87vh] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-start mb-10">Our Products</h1>
          {products.length === 0 ? (
            <p className="text-center text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer h-[350px] flex flex-col"
                  key={product._id}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={200}
                      className="mx-auto rounded-lg mb-4 flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div className="w-[250px] h-[200px] bg-gray-200 mx-auto rounded-lg mb-4 flex-shrink-0" />
                  )}
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600 flex-grow overflow-hidden line-clamp-3">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold mt-2">₹{product.price}/kg</p>
                  <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={() => handleCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
