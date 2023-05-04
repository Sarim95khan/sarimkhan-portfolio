import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll snap-y snap-mandatory z-0">
      <Header />
      {/* Hero */}
      <section id="Hero" className="snap-center mt-10">
        <Hero />
      </section>
    </div>
  );
}
