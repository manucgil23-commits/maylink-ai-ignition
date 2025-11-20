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
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  // FAQ structured data - using first 3 questions
  const faqData = [
    {
      question: "¿Qué tipo de automatizaciones pueden crear?",
      answer: "Creamos automatizaciones personalizadas con IA para una amplia variedad de procesos: chatbots inteligentes, automatización de atención al cliente, análisis de datos, procesamiento de documentos, integración de sistemas, y mucho más. Cada solución se adapta específicamente a las necesidades de tu negocio.",
    },
    {
      question: "¿Cuánto tiempo tarda en implementarse una solución?",
      answer: "El tiempo varía según la complejidad del proyecto. Proyectos simples pueden estar listos en 1-2 semanas, mientras que soluciones más complejas pueden tomar 4-8 semanas. Siempre ofrecemos un cronograma detallado después de la consulta inicial.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
      answer: "No. Diseñamos todas nuestras soluciones para que sean intuitivas y fáciles de usar. Además, proporcionamos capacitación completa a tu equipo y documentación detallada. Nuestro soporte está disponible siempre que lo necesites.",
    },
  ];

  // Services structured data
  const servicesData = [
    {
      name: "Desarrollo Web y Aplicaciones",
      description: "Sitios web y aplicaciones profesionales con hosting y mantenimiento incluido para garantizar tu presencia digital.",
    },
    {
      name: "Chatbots Inteligentes",
      description: "Asistentes virtuales con IA que atienden a tus clientes 24/7, mejorando la satisfacción y reduciendo costos.",
    },
    {
      name: "Automatizaciones Personalizadas",
      description: "Soluciones a medida que optimizan procesos, ahorran tiempo y aumentan la eficiencia de tu negocio.",
    },
  ];

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
      <StructuredData type="faq" questions={faqData} />
      <StructuredData type="service" services={servicesData} />
      
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
