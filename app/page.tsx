
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Features />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
