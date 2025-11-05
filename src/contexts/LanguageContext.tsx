import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

type TranslationObject = Record<string, any>;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationObject;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      porQueElegirnos: "Por qué elegirnos",
      resenas: "Reseñas",
      faq: "FAQ",
      contacto: "Contáctanos",
    },
    hero: {
      badge: "Innovación en Automatización",
      title: "Conectando ",
      titleHighlight: "posibilidades infinitas",
      description: "Creamos automatizaciones con inteligencia artificial que impulsan tu negocio hacia el futuro. Soluciones personalizadas que transforman ideas en realidad.",
      cta1: "Explorar servicios",
      cta2: "Solicitar presupuesto",
    },
    whyChooseUs: {
      title: "Por qué elegir ",
      titleHighlight: "MayLink AI",
      subtitle: "La combinación perfecta entre experiencia técnica e innovación constante",
      cards: [
        {
          title: "Experiencia comprobada",
          description: "Más de 50 proyectos de automatización exitosos para empresas de todos los tamaños.",
          detail: "Hemos trabajado con startups, pymes y grandes empresas, entregando soluciones que realmente transforman la manera de hacer negocios.",
        },
        {
          title: "Tecnología de vanguardia",
          description: "Utilizamos las últimas herramientas de IA para crear soluciones robustas y escalables.",
          detail: "Nos mantenemos actualizados con las tecnologías más avanzadas para asegurar que tu solución sea futura-proof.",
        },
        {
          title: "Soporte continuo",
          description: "Acompañamos tu proyecto desde la idea inicial hasta su evolución futura.",
          detail: "No te dejamos solo después del lanzamiento. Estamos contigo para actualizaciones, mejoras y cualquier necesidad que surja.",
        },
        {
          title: "Resultados medibles",
          description: "Cada proyecto incluye métricas claras para que veas el impacto real en tu negocio.",
          detail: "Implementamos sistemas de análisis que te permiten medir el ROI y el impacto de cada solución implementada.",
        },
      ],
      readMore: "Leer más",
      readLess: "Leer menos",
    },
    services: {
      title: "Nuestros ",
      titleHighlight: "Servicios",
      subtitle: "Elige el pack perfecto para impulsar tu transformación digital",
      requestInfo: "Solicitar info",
    },
    testimonials: {
      title: "Lo que dicen ",
      titleHighlight: "nuestros clientes",
      subtitle: "Resultados reales de empresas que confiaron en nosotros",
    },
    faq: {
      title: "Preguntas ",
      titleHighlight: "frecuentes",
      subtitle: "Resolvemos tus dudas más comunes sobre nuestros servicios",
      moreQuestions: "¿Tienes más preguntas?",
      contactUs: "Contáctanos y te responderemos enseguida",
      contactButton: "Ir a contacto",
    },
    contact: {
      title: "Hablemos de tu ",
      titleHighlight: "proyecto",
      subtitle: "¿Tienes un proyecto en mente? Cuéntanos sobre tu idea y te responderemos en menos de 24 horas",
      infoTitle: "Información de contacto",
      infoDescription: "Estamos aquí para ayudarte a transformar tu negocio con IA. Contáctanos y descubre cómo podemos impulsar tu crecimiento.",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      locationValue: "Madrid, España",
      guaranteeTitle: "Respuesta garantizada",
      guaranteeDescription: "Nos comprometemos a responderte en menos de 24 horas laborables",
      formName: "Nombre completo",
      formEmail: "Email",
      formMessage: "Mensaje",
      formNamePlaceholder: "Juan Pérez",
      formEmailPlaceholder: "tu@email.com",
      formMessagePlaceholder: "Cuéntanos sobre tu proyecto...",
      formSubmit: "Enviar mensaje",
      formSubmitting: "Enviando...",
      formPrivacy: "Al enviar este formulario, aceptas nuestra política de privacidad",
      errorTitle: "Error",
      errorFields: "Por favor, completa todos los campos",
      errorEmail: "Por favor, introduce un email válido",
      successTitle: "¡Mensaje enviado!",
      successDescription: "Te responderemos en menos de 24 horas",
    },
    footer: {
      description: "Conectando posibilidades infinitas. Automatizaciones con inteligencia artificial que impulsan tu negocio hacia el futuro.",
      quickLinks: "Enlaces rápidos",
      legal: "Legal",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      legalNotice: "Aviso legal",
      cookies: "Cookies",
      copyright: "Todos los derechos reservados",
      madeWith: "Hecho con",
      madeIn: "en España",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      servicios: "Services",
      porQueElegirnos: "Why Choose Us",
      resenas: "Reviews",
      faq: "FAQ",
      contacto: "Contact Us",
    },
    hero: {
      badge: "Innovation in Automation",
      title: "Connecting ",
      titleHighlight: "infinite possibilities",
      description: "We create AI-powered automations that drive your business into the future. Customized solutions that transform ideas into reality.",
      cta1: "Explore services",
      cta2: "Request quote",
    },
    whyChooseUs: {
      title: "Why choose ",
      titleHighlight: "MayLink AI",
      subtitle: "The perfect combination of technical expertise and constant innovation",
      cards: [
        {
          title: "Proven experience",
          description: "Over 50 successful automation projects for businesses of all sizes.",
          detail: "We have worked with startups, SMEs and large companies, delivering solutions that truly transform the way of doing business.",
        },
        {
          title: "Cutting-edge technology",
          description: "We use the latest AI tools to create robust and scalable solutions.",
          detail: "We stay updated with the most advanced technologies to ensure your solution is future-proof.",
        },
        {
          title: "Continuous support",
          description: "We accompany your project from the initial idea to its future evolution.",
          detail: "We don't leave you alone after launch. We are with you for updates, improvements and any needs that arise.",
        },
        {
          title: "Measurable results",
          description: "Each project includes clear metrics so you can see the real impact on your business.",
          detail: "We implement analysis systems that allow you to measure the ROI and impact of each implemented solution.",
        },
      ],
      readMore: "Read more",
      readLess: "Read less",
    },
    services: {
      title: "Our ",
      titleHighlight: "Services",
      subtitle: "Choose the perfect package to boost your digital transformation",
      requestInfo: "Request info",
    },
    testimonials: {
      title: "What our ",
      titleHighlight: "customers say",
      subtitle: "Real results from companies that trusted us",
    },
    faq: {
      title: "Frequently ",
      titleHighlight: "asked questions",
      subtitle: "We answer your most common questions about our services",
      moreQuestions: "Have more questions?",
      contactUs: "Contact us and we'll answer you right away",
      contactButton: "Go to contact",
    },
    contact: {
      title: "Let's talk about your ",
      titleHighlight: "project",
      subtitle: "Have a project in mind? Tell us about your idea and we'll respond within 24 hours",
      infoTitle: "Contact information",
      infoDescription: "We're here to help you transform your business with AI. Contact us and discover how we can boost your growth.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Madrid, Spain",
      guaranteeTitle: "Guaranteed response",
      guaranteeDescription: "We commit to respond within 24 business hours",
      formName: "Full name",
      formEmail: "Email",
      formMessage: "Message",
      formNamePlaceholder: "John Doe",
      formEmailPlaceholder: "your@email.com",
      formMessagePlaceholder: "Tell us about your project...",
      formSubmit: "Send message",
      formSubmitting: "Sending...",
      formPrivacy: "By submitting this form, you accept our privacy policy",
      errorTitle: "Error",
      errorFields: "Please fill in all fields",
      errorEmail: "Please enter a valid email",
      successTitle: "Message sent!",
      successDescription: "We'll respond within 24 hours",
    },
    footer: {
      description: "Connecting infinite possibilities. AI-powered automations that drive your business into the future.",
      quickLinks: "Quick links",
      legal: "Legal",
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      legalNotice: "Legal notice",
      cookies: "Cookies",
      copyright: "All rights reserved",
      madeWith: "Made with",
      madeIn: "in Spain",
    },
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
