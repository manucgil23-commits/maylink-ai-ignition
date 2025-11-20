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
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SEO
        title="Automatización Inteligente con IA para tu Negocio"
        description="Creamos automatizaciones con inteligencia artificial que impulsan tu negocio. Desarrollo web profesional, chatbots inteligentes y soluciones personalizadas con IA."
        keywords={[
          "inteligencia artificial",
          "automatización empresarial",
          "chatbots IA",
          "desarrollo web",
          "soluciones digitales",
          "automatización procesos",
          "IA personalizada",
          "transformación digital",
        ]}
        ogType="website"
      />
      <StructuredData type="organization" />
      
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
