import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
];

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = productList.find((p) => p.id === productId);

  if (!product) return notFound();

  // Filter out current product to show related products
  const relatedProducts = productList.filter((p) => p.id !== productId);

  return (
    <>
      <Navbar />
      <div className="min-h-[83vh] bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <Link
                key={relProduct.id}
                href={`/product/${relProduct.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <Image
                  src={relProduct.image}
                  alt={relProduct.name}
                  width={250}
                  height={150}
                  className="rounded-md object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{relProduct.name}</h3>
                <p className="text-blue-600 font-bold">{relProduct.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
