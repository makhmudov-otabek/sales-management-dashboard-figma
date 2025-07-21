import Navbar from "@/components/Navbar";
import Sales from "@/components/Sales";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full">
        <Navbar />
        <Sales />
      </section>
    </main>
  );
}
