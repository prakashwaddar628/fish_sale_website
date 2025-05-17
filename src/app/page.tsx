import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main
        className="flex-grow py-4 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/interface.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-opacity-50 rounded-xl text-center mr-[780px] mt-[280px]">

          <Link href="/product">
            <button className="bg-blue-600 hover:bg-blue-700 py-3 px-18 text-xl text-white rounded-full transition">
              Order Now
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
