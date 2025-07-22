import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sales from "@/components/Sales";
import Sidebar from "@/components/Sidebar";
import TopProducts from "@/components/TopProducts";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <section className="w-full">
        <Navbar onClose={() => setIsOpen(true)} />
        <Sales />
        <TopProducts />
        <Footer />
      </section>
    </main>
  );
}
