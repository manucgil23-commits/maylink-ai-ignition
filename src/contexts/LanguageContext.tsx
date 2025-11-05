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
      stats: {
        projects: "Proyectos completados",
        satisfaction: "Satisfacción cliente",
        support: "Soporte disponible",
        response: "Respuesta garantizada",
      }
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
      price: "Consultar",
      packs: [
        {
          title: "Web Express",
          description: "Páginas web profesionales, rápidas y modernas que convierten visitantes en clientes.",
          features: [
            "Diseño responsive y moderno",
            "Optimización SEO básica",
            "Integración con redes sociales",
            "Panel de administración",
          ],
        },
        {
          title: "IA Interactiva",
          description: "Chatbots inteligentes y automatizaciones que atienden a tus clientes 24/7.",
          features: [
            "Chatbot con IA conversacional",
            "Automatización de citas y reservas",
            "Respuestas personalizadas",
            "Integración con WhatsApp",
          ],
        },
        {
          title: "Solución a medida",
          description: "Automatizaciones avanzadas totalmente personalizadas para desafíos únicos.",
          features: [
            "Análisis personalizado de necesidades",
            "Desarrollo a medida",
            "Integración con sistemas existentes",
            "Soporte prioritario continuo",
          ],
        },
        {
          title: "Automatización Empresarial",
          description: "Optimiza los procesos internos de tu negocio con flujos de trabajo inteligentes y eficientes.",
          features: [
            "Integración entre aplicaciones y plataformas",
            "Reducción de tareas manuales",
            "Flujos automatizados personalizables",
            "Ahorro de tiempo y recursos",
          ],
        },
        {
          title: "Asistente Virtual IA",
          description: "Asistentes virtuales diseñados para atender, informar y acompañar a tus clientes en tiempo real.",
          features: [
            "Respuestas automáticas personalizadas",
            "Atención multicanal (web, WhatsApp, email)",
            "Gestión de citas y consultas",
            "Disponibilidad 24/7 con IA avanzada",
          ],
        },
      ],
    },
    testimonials: {
      title: "Lo que dicen ",
      titleHighlight: "nuestros clientes",
      subtitle: "Resultados reales de empresas que confiaron en nosotros",
      items: [
        {
          name: "Carlos Méndez",
          company: "PymeTech Solutions",
          role: "Director General",
          text: "Gracias a MayLink AI, nuestra web ahora responde automáticamente a los clientes. La eficiencia ha aumentado un 300% y nuestros clientes están encantados.",
        },
        {
          name: "Laura Ríos",
          company: "EstudioNova",
          role: "Fundadora",
          text: "Automatizamos nuestras reservas con IA y el cambio fue increíble. Ya no perdemos ninguna cita y podemos enfocarnos en lo que realmente importa: nuestros clientes.",
        },
        {
          name: "Miguel Torres",
          company: "Digital Ventures",
          role: "CEO",
          text: "El equipo de MayLink AI transformó nuestra atención al cliente. El chatbot responde con precisión y la integración fue perfecta. Totalmente recomendable.",
        },
        {
          name: "Ana Martínez",
          company: "Consultora Horizonte",
          role: "Directora de Operaciones",
          text: "Profesionales de primer nivel. Entendieron perfectamente nuestras necesidades y crearon una solución que superó nuestras expectativas.",
        },
        {
          name: "David Sánchez",
          company: "TechStart",
          role: "CTO",
          text: "La automatización que implementaron nos ha ahorrado más de 20 horas semanales. La inversión se pagó sola en menos de dos meses.",
        },
      ],
    },
    faq: {
      title: "Preguntas ",
      titleHighlight: "frecuentes",
      subtitle: "Resolvemos tus dudas más comunes sobre nuestros servicios",
      moreQuestions: "¿Tienes más preguntas?",
      contactUs: "Contáctanos y te responderemos enseguida",
      contactButton: "Ir a contacto",
      questions: [
        {
          question: "¿Qué tipo de automatizaciones pueden crear?",
          answer: "Creamos automatizaciones personalizadas con IA para una amplia variedad de procesos: chatbots inteligentes, automatización de atención al cliente, análisis de datos, procesamiento de documentos, integración de sistemas, y mucho más. Cada solución se adapta específicamente a las necesidades de tu negocio."
        },
        {
          question: "¿Cuánto tiempo tarda en implementarse una solución?",
          answer: "El tiempo varía según la complejidad del proyecto. Proyectos simples pueden estar listos en 1-2 semanas, mientras que soluciones más complejas pueden tomar 4-8 semanas. Siempre ofrecemos un cronograma detallado después de la consulta inicial."
        },
        {
          question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
          answer: "No. Diseñamos todas nuestras soluciones para que sean intuitivas y fáciles de usar. Además, proporcionamos capacitación completa a tu equipo y documentación detallada. Nuestro soporte está disponible siempre que lo necesites."
        },
        {
          question: "¿Cómo funciona el proceso de trabajo?",
          answer: "Comenzamos con una consulta gratuita para entender tus necesidades. Luego creamos una propuesta personalizada con presupuesto y cronograma. Una vez aprobado, desarrollamos la solución en sprints iterativos con tu feedback continuo. Finalmente, implementamos, capacitamos y ofrecemos soporte continuo."
        },
        {
          question: "¿Qué tipo de soporte ofrecen después de la implementación?",
          answer: "Ofrecemos soporte continuo con respuesta garantizada. Esto incluye mantenimiento, actualizaciones, resolución de problemas y mejoras incrementales. También proporcionamos informes mensuales de rendimiento y análisis de métricas."
        },
        {
          question: "¿Cuál es el coste aproximado de una automatización?",
          answer: "Cada proyecto es único y adaptamos nuestros precios según tus necesidades específicas. Ofrecemos presupuestos personalizados sin compromiso después de una consulta inicial donde entendemos el alcance y complejidad de tu proyecto."
        },
        {
          question: "¿Las soluciones se integran con mis sistemas actuales?",
          answer: "Sí, diseñamos nuestras automatizaciones para integrarse perfectamente con tus sistemas existentes: CRM, ERP, bases de datos, APIs, aplicaciones web y móviles. Trabajamos con las tecnologías más populares y podemos adaptarnos a infraestructuras personalizadas."
        },
        {
          question: "¿Cómo garantizan la seguridad de los datos?",
          answer: "La seguridad es nuestra prioridad. Implementamos encriptación end-to-end, cumplimos con RGPD y otras normativas de protección de datos, realizamos auditorías de seguridad regulares y seguimos las mejores prácticas de la industria. Todos los datos se almacenan en servidores seguros con copias de seguridad automáticas."
        }
      ],
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
      stats: {
        projects: "Completed projects",
        satisfaction: "Customer satisfaction",
        support: "Support available",
        response: "Guaranteed response",
      }
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
      price: "Consult",
      packs: [
        {
          title: "Web Express",
          description: "Professional, fast and modern websites that convert visitors into customers.",
          features: [
            "Responsive and modern design",
            "Basic SEO optimization",
            "Social media integration",
            "Administration panel",
          ],
        },
        {
          title: "Interactive AI",
          description: "Intelligent chatbots and automations that serve your customers 24/7.",
          features: [
            "Conversational AI chatbot",
            "Appointment and booking automation",
            "Personalized responses",
            "WhatsApp integration",
          ],
        },
        {
          title: "Custom Solution",
          description: "Advanced automations fully customized for unique challenges.",
          features: [
            "Personalized needs analysis",
            "Custom development",
            "Integration with existing systems",
            "Continuous priority support",
          ],
        },
        {
          title: "Business Automation",
          description: "Optimize your business internal processes with intelligent and efficient workflows.",
          features: [
            "Integration between applications and platforms",
            "Reduction of manual tasks",
            "Customizable automated flows",
            "Time and resource savings",
          ],
        },
        {
          title: "AI Virtual Assistant",
          description: "Virtual assistants designed to serve, inform and accompany your customers in real time.",
          features: [
            "Personalized automatic responses",
            "Multichannel support (web, WhatsApp, email)",
            "Appointment and inquiry management",
            "24/7 availability with advanced AI",
          ],
        },
      ],
    },
    testimonials: {
      title: "What our ",
      titleHighlight: "customers say",
      subtitle: "Real results from companies that trusted us",
      items: [
        {
          name: "Carlos Méndez",
          company: "PymeTech Solutions",
          role: "CEO",
          text: "Thanks to MayLink AI, our website now automatically responds to customers. Efficiency has increased by 300% and our customers are delighted.",
        },
        {
          name: "Laura Ríos",
          company: "EstudioNova",
          role: "Founder",
          text: "We automated our bookings with AI and the change was incredible. We no longer miss any appointments and can focus on what really matters: our customers.",
        },
        {
          name: "Miguel Torres",
          company: "Digital Ventures",
          role: "CTO",
          text: "The MayLink AI team transformed our customer service. The chatbot responds accurately and the integration was perfect. Totally recommended.",
        },
        {
          name: "Ana Martínez",
          company: "Consultora Horizonte",
          role: "Operations Director",
          text: "Top-level professionals. They perfectly understood our needs and created a solution that exceeded our expectations.",
        },
        {
          name: "David Sánchez",
          company: "TechStart",
          role: "CTO",
          text: "The automation they implemented has saved us more than 20 hours per week. The investment paid for itself in less than two months.",
        },
      ],
    },
    faq: {
      title: "Frequently ",
      titleHighlight: "asked questions",
      subtitle: "We answer your most common questions about our services",
      moreQuestions: "Have more questions?",
      contactUs: "Contact us and we'll answer you right away",
      contactButton: "Go to contact",
      questions: [
        {
          question: "What type of automations can you create?",
          answer: "We create custom AI automations for a wide variety of processes: intelligent chatbots, customer service automation, data analysis, document processing, system integration, and much more. Each solution is specifically adapted to your business needs."
        },
        {
          question: "How long does it take to implement a solution?",
          answer: "Time varies depending on project complexity. Simple projects can be ready in 1-2 weeks, while more complex solutions may take 4-8 weeks. We always offer a detailed timeline after the initial consultation."
        },
        {
          question: "Do I need technical knowledge to use the automations?",
          answer: "No. We design all our solutions to be intuitive and easy to use. In addition, we provide complete training to your team and detailed documentation. Our support is available whenever you need it."
        },
        {
          question: "How does the work process work?",
          answer: "We start with a free consultation to understand your needs. Then we create a personalized proposal with budget and timeline. Once approved, we develop the solution in iterative sprints with your continuous feedback. Finally, we implement, train and offer continuous support."
        },
        {
          question: "What type of support do you offer after implementation?",
          answer: "We offer continuous support with guaranteed response. This includes maintenance, updates, troubleshooting and incremental improvements. We also provide monthly performance reports and metrics analysis."
        },
        {
          question: "What is the approximate cost of an automation?",
          answer: "Each project is unique and we adapt our prices according to your specific needs. We offer personalized quotes without commitment after an initial consultation where we understand the scope and complexity of your project."
        },
        {
          question: "Do the solutions integrate with my current systems?",
          answer: "Yes, we design our automations to integrate seamlessly with your existing systems: CRM, ERP, databases, APIs, web and mobile applications. We work with the most popular technologies and can adapt to custom infrastructures."
        },
        {
          question: "How do you guarantee data security?",
          answer: "Security is our priority. We implement end-to-end encryption, comply with GDPR and other data protection regulations, conduct regular security audits and follow industry best practices. All data is stored on secure servers with automatic backups."
        }
      ],
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
