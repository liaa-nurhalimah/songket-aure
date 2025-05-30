import AboutSection from "./sections/about";
import BestQualitySection from "./sections/BestQuality";
import CommitmentSection from "./sections/commitment";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import Navbar from "./sections/navbar";
import ProductSection from "./sections/BestQuality";
import TestimonialSection from "./sections/testimoni";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <BestQualitySection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
