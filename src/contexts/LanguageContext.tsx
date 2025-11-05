import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    inicio: "Inicio",
    servicios: "Servicios",
    porQueElegirnos: "Por qué elegirnos",
    resenas: "Reseñas",
    contacto: "Contacto",
    contactanos: "Contáctanos",
    
    // Hero
    heroTitle: "Transforma tu negocio con",
    heroTitleHighlight: "Inteligencia Artificial",
    heroSubtitle: "Creamos soluciones digitales innovadoras que impulsan el crecimiento de tu empresa. Automatización, desarrollo web y chatbots inteligentes al alcance de tu mano.",
    empezar: "Empezar ahora",
    
    // Services
    nuestrosServicios: "Nuestros Servicios",
    serviciosSubtitle: "Elige el pack perfecto para impulsar tu transformación digital",
    consultar: "Consultar",
    solicitarInfo: "Solicitar info",
    
    // Web Express
    webExpressTitle: "Web Express",
    webExpressDesc: "Páginas web profesionales, rápidas y modernas que convierten visitantes en clientes.",
    webExpressFeature1: "Diseño responsive y moderno",
    webExpressFeature2: "Optimización SEO básica",
    webExpressFeature3: "Integración con redes sociales",
    webExpressFeature4: "Panel de administración",
    
    // IA Interactiva
    iaInteractivaTitle: "IA Interactiva",
    iaInteractivaDesc: "Chatbots inteligentes y automatizaciones que atienden a tus clientes 24/7.",
    iaInteractivaFeature1: "Chatbot con IA conversacional",
    iaInteractivaFeature2: "Automatización de citas y reservas",
    iaInteractivaFeature3: "Respuestas personalizadas",
    iaInteractivaFeature4: "Integración con WhatsApp",
    
    // Solución a medida
    solucionMedidaTitle: "Solución a medida",
    solucionMedidaDesc: "Automatizaciones avanzadas totalmente personalizadas para desafíos únicos.",
    solucionMedidaFeature1: "Análisis personalizado de necesidades",
    solucionMedidaFeature2: "Desarrollo a medida",
    solucionMedidaFeature3: "Integración con sistemas existentes",
    solucionMedidaFeature4: "Soporte prioritario continuo",
    
    // Automatización Empresarial
    automatizacionTitle: "Automatización Empresarial",
    automatizacionDesc: "Optimiza los procesos internos de tu negocio con flujos de trabajo inteligentes y eficientes.",
    automatizacionFeature1: "Integración entre aplicaciones y plataformas",
    automatizacionFeature2: "Reducción de tareas manuales",
    automatizacionFeature3: "Flujos automatizados personalizables",
    automatizacionFeature4: "Ahorro de tiempo y recursos",
    
    // Asistente Virtual
    asistenteTitle: "Asistente Virtual IA",
    asistenteDesc: "Asistentes virtuales diseñados para atender, informar y acompañar a tus clientes en tiempo real.",
    asistenteFeature1: "Respuestas automáticas personalizadas",
    asistenteFeature2: "Atención multicanal (web, WhatsApp, email)",
    asistenteFeature3: "Gestión de citas y consultas",
    asistenteFeature4: "Disponibilidad 24/7 con IA avanzada",
    
    // Why Choose Us
    porQueTitle: "¿Por qué elegir",
    porQueTitleHighlight: "MayLink AI?",
    porQueSubtitle: "Transformamos ideas en soluciones digitales que generan resultados reales",
    
    innovacionTitle: "Innovación Constante",
    innovacionDesc: "Utilizamos las últimas tecnologías en IA y desarrollo web para crear soluciones que marcan la diferencia.",
    innovacionDetail: "Nos mantenemos a la vanguardia de las tecnologías emergentes, implementando soluciones de IA generativa, automatización inteligente y desarrollo web moderno que transforman la manera en que las empresas operan y se relacionan con sus clientes.",
    
    personalizacionTitle: "Personalización Total",
    personalizacionDesc: "Cada proyecto es único. Adaptamos nuestras soluciones a las necesidades específicas de tu negocio.",
    personalizacionDetail: "Entendemos que cada negocio tiene desafíos únicos. Por eso, realizamos un análisis profundo de tus necesidades para diseñar soluciones a medida que se integran perfectamente con tus procesos existentes y objetivos de crecimiento.",
    
    soporteTitle: "Soporte Continuo",
    soporteDesc: "No te dejamos solo después del lanzamiento. Estamos contigo en cada paso del camino.",
    soporteDetail: "Nuestro compromiso no termina con la entrega del proyecto. Ofrecemos soporte técnico continuo, actualizaciones regulares y mantenimiento proactivo para asegurar que tu solución digital siempre funcione de manera óptima y evolucione con tu negocio.",
    
    resultadosTitle: "Resultados Medibles",
    resultadosDesc: "Nos enfocamos en entregar soluciones que generen un impacto real y cuantificable en tu negocio.",
    resultadosDetail: "Implementamos métricas claras y sistemas de análisis que te permiten medir el ROI de tu inversión. Desde el aumento en conversiones hasta la reducción de costos operativos, cada solución está diseñada para generar resultados tangibles y medibles.",
    
    verMas: "Ver más",
    verMenos: "Ver menos",
    
    // Testimonials
    testimoniosTitle: "Lo que dicen nuestros",
    testimoniosTitleHighlight: "clientes",
    
    // Contact
    contactoTitle: "¿Listo para transformar tu negocio?",
    contactoSubtitle: "Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos",
    nombreLabel: "Nombre",
    nombrePlaceholder: "Tu nombre completo",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    mensajeLabel: "Mensaje",
    mensajePlaceholder: "Cuéntanos sobre tu proyecto...",
    enviar: "Enviar mensaje",
    
    // FAQ
    faqTitle: "Preguntas",
    faqTitleHighlight: "Frecuentes",
    
    faqQuestion1: "¿Cuánto tiempo toma desarrollar un proyecto?",
    faqAnswer1: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede estar listo en 2-3 semanas, mientras que soluciones más complejas con IA pueden tomar de 1 a 3 meses. Siempre establecemos plazos claros desde el inicio.",
    
    faqQuestion2: "¿Ofrecen soporte después del lanzamiento?",
    faqAnswer2: "Sí, ofrecemos diferentes planes de soporte y mantenimiento. Incluimos un período inicial de soporte gratuito y luego puedes elegir el plan que mejor se adapte a tus necesidades de actualización y mantenimiento continuo.",
    
    faqQuestion3: "¿Cuál es el costo aproximado de una automatización?",
    faqAnswer3: "El costo varía según la complejidad y alcance del proyecto. Ofrecemos presupuestos personalizados sin compromiso después de entender tus necesidades específicas. Agenda una consulta gratuita para conocer más detalles.",
    
    faqQuestion4: "¿Necesito conocimientos técnicos para usar sus soluciones?",
    faqAnswer4: "No, diseñamos todas nuestras soluciones para que sean intuitivas y fáciles de usar. Además, proporcionamos capacitación completa y documentación detallada para que tú y tu equipo puedan aprovechar al máximo las herramientas.",
    
    // Footer
    footerDesc: "Transformamos ideas en soluciones digitales innovadoras con el poder de la inteligencia artificial.",
    footerEnlaces: "Enlaces",
    footerContactoTitle: "Contacto",
    footerEmail: "info@maylink.ai",
    footerTelefono: "+34 123 456 789",
    footerDerechos: "Todos los derechos reservados.",
  },
  en: {
    // Header
    inicio: "Home",
    servicios: "Services",
    porQueElegirnos: "Why Choose Us",
    resenas: "Reviews",
    contacto: "Contact",
    contactanos: "Contact Us",
    
    // Hero
    heroTitle: "Transform your business with",
    heroTitleHighlight: "Artificial Intelligence",
    heroSubtitle: "We create innovative digital solutions that drive your company's growth. Automation, web development, and intelligent chatbots at your fingertips.",
    empezar: "Get Started",
    
    // Services
    nuestrosServicios: "Our Services",
    serviciosSubtitle: "Choose the perfect package to boost your digital transformation",
    consultar: "Inquire",
    solicitarInfo: "Request info",
    
    // Web Express
    webExpressTitle: "Web Express",
    webExpressDesc: "Professional, fast, and modern websites that convert visitors into customers.",
    webExpressFeature1: "Responsive and modern design",
    webExpressFeature2: "Basic SEO optimization",
    webExpressFeature3: "Social media integration",
    webExpressFeature4: "Admin panel",
    
    // IA Interactiva
    iaInteractivaTitle: "Interactive AI",
    iaInteractivaDesc: "Intelligent chatbots and automations that serve your customers 24/7.",
    iaInteractivaFeature1: "Conversational AI chatbot",
    iaInteractivaFeature2: "Appointment and booking automation",
    iaInteractivaFeature3: "Personalized responses",
    iaInteractivaFeature4: "WhatsApp integration",
    
    // Solución a medida
    solucionMedidaTitle: "Custom Solution",
    solucionMedidaDesc: "Advanced automations fully customized for unique challenges.",
    solucionMedidaFeature1: "Personalized needs analysis",
    solucionMedidaFeature2: "Custom development",
    solucionMedidaFeature3: "Integration with existing systems",
    solucionMedidaFeature4: "Priority ongoing support",
    
    // Automatización Empresarial
    automatizacionTitle: "Business Automation",
    automatizacionDesc: "Optimize your business internal processes with intelligent and efficient workflows.",
    automatizacionFeature1: "Integration between applications and platforms",
    automatizacionFeature2: "Reduction of manual tasks",
    automatizacionFeature3: "Customizable automated flows",
    automatizacionFeature4: "Time and resource savings",
    
    // Asistente Virtual
    asistenteTitle: "AI Virtual Assistant",
    asistenteDesc: "Virtual assistants designed to serve, inform, and accompany your customers in real-time.",
    asistenteFeature1: "Personalized automatic responses",
    asistenteFeature2: "Multi-channel support (web, WhatsApp, email)",
    asistenteFeature3: "Appointment and inquiry management",
    asistenteFeature4: "24/7 availability with advanced AI",
    
    // Why Choose Us
    porQueTitle: "Why choose",
    porQueTitleHighlight: "MayLink AI?",
    porQueSubtitle: "We transform ideas into digital solutions that generate real results",
    
    innovacionTitle: "Constant Innovation",
    innovacionDesc: "We use the latest AI and web development technologies to create solutions that make a difference.",
    innovacionDetail: "We stay at the forefront of emerging technologies, implementing generative AI solutions, intelligent automation, and modern web development that transform how businesses operate and interact with their customers.",
    
    personalizacionTitle: "Total Customization",
    personalizacionDesc: "Every project is unique. We adapt our solutions to your business's specific needs.",
    personalizacionDetail: "We understand that every business has unique challenges. That's why we conduct a deep analysis of your needs to design custom solutions that integrate perfectly with your existing processes and growth objectives.",
    
    soporteTitle: "Ongoing Support",
    soporteDesc: "We don't leave you alone after launch. We're with you every step of the way.",
    soporteDetail: "Our commitment doesn't end with project delivery. We offer continuous technical support, regular updates, and proactive maintenance to ensure your digital solution always functions optimally and evolves with your business.",
    
    resultadosTitle: "Measurable Results",
    resultadosDesc: "We focus on delivering solutions that generate real and quantifiable impact on your business.",
    resultadosDetail: "We implement clear metrics and analysis systems that allow you to measure the ROI of your investment. From increased conversions to reduced operational costs, every solution is designed to generate tangible and measurable results.",
    
    verMas: "See more",
    verMenos: "See less",
    
    // Testimonials
    testimoniosTitle: "What our",
    testimoniosTitleHighlight: "clients say",
    
    // Contact
    contactoTitle: "Ready to transform your business?",
    contactoSubtitle: "Tell us about your project and discover how we can help you achieve your goals",
    nombreLabel: "Name",
    nombrePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    mensajeLabel: "Message",
    mensajePlaceholder: "Tell us about your project...",
    enviar: "Send message",
    
    // FAQ
    faqTitle: "Frequently Asked",
    faqTitleHighlight: "Questions",
    
    faqQuestion1: "How long does it take to develop a project?",
    faqAnswer1: "Development time varies depending on project complexity. A basic website can be ready in 2-3 weeks, while more complex AI solutions can take 1 to 3 months. We always establish clear deadlines from the start.",
    
    faqQuestion2: "Do you offer support after launch?",
    faqAnswer2: "Yes, we offer different support and maintenance plans. We include an initial free support period and then you can choose the plan that best suits your ongoing update and maintenance needs.",
    
    faqQuestion3: "What is the approximate cost of an automation?",
    faqAnswer3: "The cost varies depending on the complexity and scope of the project. We offer personalized quotes without obligation after understanding your specific needs. Schedule a free consultation to learn more details.",
    
    faqQuestion4: "Do I need technical knowledge to use your solutions?",
    faqAnswer4: "No, we design all our solutions to be intuitive and easy to use. Additionally, we provide complete training and detailed documentation so you and your team can make the most of the tools.",
    
    // Footer
    footerDesc: "We transform ideas into innovative digital solutions with the power of artificial intelligence.",
    footerEnlaces: "Links",
    footerContactoTitle: "Contact",
    footerEmail: "info@maylink.ai",
    footerTelefono: "+34 123 456 789",
    footerDerechos: "All rights reserved.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

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
