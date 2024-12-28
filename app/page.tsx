import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="bg-red-400 h-screen"></div>
      <Footer />
    </div>
  );
}
