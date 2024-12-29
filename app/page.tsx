import Feature from "@/components/home/feature";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature />
      <Footer />
    </div>
  );
}
