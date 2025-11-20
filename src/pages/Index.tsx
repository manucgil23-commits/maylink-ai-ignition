import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUsEnhanced from "@/components/WhyChooseUsEnhanced";
import Services3D from "@/components/Services3D";
import BlogGrid from "@/components/blog/BlogGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <WhyChooseUsEnhanced />
            <Services3D />
            <BlogGrid limit={3} />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
