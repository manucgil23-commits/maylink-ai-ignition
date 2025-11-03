import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, MessageSquareCode, Settings2, ArrowRight, X, Check } from "lucide-react";
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
    detailedInfo: "Creamos sitios web que no solo lucen increíbles, sino que también están optimizados para convertir visitantes en clientes. Incluye hosting gratuito el primer año y soporte técnico.",
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
    detailedInfo: "Implementamos chatbots con inteligencia artificial que aprenden de cada interacción. Integración completa con tus sistemas existentes y análisis detallado de conversaciones.",
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
    detailedInfo: "Soluciones enterprise diseñadas específicamente para tu negocio. Escalables, seguras y con el más alto nivel de personalización. Incluye consultoría estratégica.",
  },
];

const Services3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="servicios" className="py-20 md:py-32 relative overflow-hidden">
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

        {/* 3D Carousel */}
        <div className="relative h-[600px] flex items-center justify-center mb-20">
          <div className="relative w-full max-w-6xl">
            {services.map((service, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  className="absolute left-1/2 top-1/2"
                  initial={false}
                  animate={{
                    x: offset * 350 - 175,
                    y: -250,
                    scale: absOffset === 0 ? 1.1 : 0.8,
                    rotateY: offset * 25,
                    z: absOffset === 0 ? 100 : 0,
                    opacity: absOffset > 1 ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                  }}
                  style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Card
                    className={`w-[350px] h-[480px] p-8 bg-gradient-card border-border transition-all duration-500 cursor-pointer ${
                      absOffset === 0
                        ? "border-brand-purple shadow-purple"
                        : "border-border/50"
                    } ${service.featured && absOffset === 0 ? "ring-2 ring-brand-purple" : ""}`}
                    onClick={() => absOffset === 0 && setSelectedService(index)}
                  >
                    {service.featured && absOffset === 0 && (
                      <div className="absolute top-4 right-4 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}

                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                        animate={
                          absOffset === 0
                            ? {
                                boxShadow: [
                                  "0 0 20px rgba(168, 85, 247, 0.4)",
                                  "0 0 40px rgba(168, 85, 247, 0.6)",
                                  "0 0 20px rgba(168, 85, 247, 0.4)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {absOffset === 0 &&
                        [...Array(3)].map((_, i) => (
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
                                Math.cos((i * 2 * Math.PI) / 3) * 50,
                                0,
                              ],
                              y: [
                                0,
                                Math.sin((i * 2 * Math.PI) / 3) * 50,
                                0,
                              ],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
                    <p className="text-3xl font-bold text-brand-purple mb-4 text-center">
                      {service.price}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-center text-sm">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={absOffset === 0 ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Check className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {absOffset === 0 && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                        className="w-full bg-brand-purple hover:bg-brand-purple-dark"
                        size="lg"
                      >
                        Solicitar info
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevService}
              className="border-brand-purple hover:bg-brand-purple/10"
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextService}
              className="border-brand-purple hover:bg-brand-purple/10"
            >
              →
            </Button>
          </div>
        </div>

        {/* Modal de detalles */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-gradient-card border border-brand-purple rounded-2xl p-8 max-w-2xl w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-brand-purple transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-3xl font-bold mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-4xl font-bold text-brand-purple mb-6">
                  {services[selectedService].price}
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {services[selectedService].detailedInfo}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Características incluidas:</h4>
                  <ul className="space-y-3">
                    {services[selectedService].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-brand-purple hover:bg-brand-purple-dark"
                  size="lg"
                >
                  Solicitar presupuesto personalizado
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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

export default Services3D;
