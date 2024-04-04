import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
