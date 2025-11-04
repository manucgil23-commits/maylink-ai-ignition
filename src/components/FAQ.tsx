import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
    answer: "Ofrecemos soporte continuo 24/7 con respuesta garantizada en 3 días. Esto incluye mantenimiento, actualizaciones, resolución de problemas y mejoras incrementales. También proporcionamos informes mensuales de rendimiento y análisis de métricas."
  },
  {
    question: "¿Cuál es el coste aproximado de una automatización?",
    answer: "El coste varía según la complejidad y alcance del proyecto. Proyectos básicos pueden comenzar desde 2.000€, mientras que soluciones empresariales más complejas pueden ser significativamente mayores. Ofrecemos presupuestos personalizados sin compromiso después de entender tus necesidades específicas."
  },
  {
    question: "¿Las soluciones se integran con mis sistemas actuales?",
    answer: "Sí, diseñamos nuestras automatizaciones para integrarse perfectamente con tus sistemas existentes: CRM, ERP, bases de datos, APIs, aplicaciones web y móviles. Trabajamos con las tecnologías más populares y podemos adaptarnos a infraestructuras personalizadas."
  },
  {
    question: "¿Cómo garantizan la seguridad de los datos?",
    answer: "La seguridad es nuestra prioridad. Implementamos encriptación end-to-end, cumplimos con RGPD y otras normativas de protección de datos, realizamos auditorías de seguridad regulares y seguimos las mejores prácticas de la industria. Todos los datos se almacenan en servidores seguros con copias de seguridad automáticas."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Resolvemos tus dudas sobre nuestros servicios y procesos
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:border-brand-purple transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-brand-purple hover:no-underline py-5">
                    <span className="font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-lg text-muted-foreground mb-4">
            ¿Tienes más preguntas?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById("contacto");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-brand-purple hover:bg-brand-purple-dark text-white rounded-lg font-semibold transition-all shadow-purple"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
