import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, MessageSquareCode, Settings2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedRobot from "./AnimatedRobot";

const services = [
  {
    icon: Code2,
    title: "Web Express",
    price: "desde 300 €",
    description: "Páginas web profesionales, rápidas y modernas que convierten visitantes en clientes.",
    features: [
      "Diseño responsive y moderno",
      "Optimización SEO básica",
      "Integración con redes sociales",
      "Panel de administración",
    ],
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
  },
  {
    icon: MessageSquareCode,
    title: "IA Interactiva",
    price: "desde 600 €",
    description: "Chatbots inteligentes y automatizaciones que atienden a tus clientes 24/7.",
    features: [
      "Chatbot con IA conversacional",
      "Automatización de citas y reservas",
      "Respuestas personalizadas",
      "Integración con WhatsApp",
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    featured: true,
  },
  {
    icon: Settings2,
    title: "Solución a medida",
    price: "consultar",
    description: "Automatizaciones avanzadas totalmente personalizadas para desafíos únicos.",
    features: [
      "Análisis personalizado de necesidades",
      "Desarrollo a medida",
      "Integración con sistemas existentes",
      "Soporte prioritario continuo",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
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
            Nuestros{" "}
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              Servicios
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Elige el pack perfecto para impulsar tu transformación digital
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                className="h-full"
              >
                <Card
                  className={`h-full p-8 bg-gradient-card border-border hover:border-brand-purple transition-all duration-500 group relative overflow-hidden ${
                    service.featured ? "lg:scale-105 border-brand-purple shadow-purple" : ""
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Icon with Orbiting Effect */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(168, 85, 247, 0.4)",
                          "0 0 40px rgba(168, 85, 247, 0.6)",
                          "0 0 20px rgba(168, 85, 247, 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Orbiting Particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-brand-purple"
                        style={{
                          marginLeft: -4,
                          marginTop: -4,
                        }}
                        animate={{
                          x: [
                            0,
                            Math.cos((i * 2 * Math.PI) / 3 + Math.PI / 2) * 45,
                            Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 45,
                            Math.cos((i * 2 * Math.PI) / 3 + (3 * Math.PI) / 2) * 45,
                            0,
                          ],
                          y: [
                            0,
                            Math.sin((i * 2 * Math.PI) / 3 + Math.PI / 2) * 45,
                            Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 45,
                            Math.sin((i * 2 * Math.PI) / 3 + (3 * Math.PI) / 2) * 45,
                            0,
                          ],
                          opacity: [0.3, 0.8, 0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold text-brand-purple mb-4">{service.price}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-brand-purple mt-0.5">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark group/btn"
                    size="lg"
                  >
                    Solicitar info
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Robot Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <AnimatedRobot />
            </div>
            <motion.p
              className="text-lg text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
            >
              Nuestro equipo de IA trabaja 24/7 para crear las mejores soluciones para tu negocio
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
