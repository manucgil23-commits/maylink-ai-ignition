import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUsEnhanced from "@/components/WhyChooseUsEnhanced";
import Services3D from "@/components/Services3D";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBar from "@/components/FloatingBar";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <Header />
          <main>
            <Hero />
            <WhyChooseUsEnhanced />
            <Services3D />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <FloatingBar />
        </>
      )}
    </>
  );
};

export default Index;
