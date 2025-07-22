import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sales from "@/components/Sales";
import Sidebar from "@/components/Sidebar";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full">
        <Navbar />
        <Sales />
        <TopProducts />
        <Footer />
      </section>
    </main>
  );
}
