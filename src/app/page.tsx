import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-6 px-6 bg-gradient-to-tr from-purple-500 to-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              From the shore to your door, <br /> we deliver the{" "}
              <span className="underline decoration-pink-500 decoration-4">
                Sea Fish
              </span>
            </h1>

            <p className="text-lg mb-8 text-gray-700">
              Experience the freshest{" "}
              <span className="text-purple-600 font-semibold">seafood</span>{" "}
              delivered right to your doorstep. Our fish is sourced from the{" "}
              <span className="text-pink-600 font-semibold">
                best suppliers
              </span>
              , ensuring quality and freshness in every bite. <br />
            </p>

            <Link href="/product" passHref>
              <button className="bg-purple-600 shadow-lg hover:bg-purple-700 py-3 px-12 text-xl text-white rounded-full transition duration-200 border border-transparent hover:border-purple-700">
                Order Now
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-80 sm:h-[80vh] rounded-lg overflow-hidden ">
            <Image
              src="/images/interface.png"
              alt="Fresh seafood interface"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
