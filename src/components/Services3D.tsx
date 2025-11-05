import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, MessageSquareCode, Settings2, ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ConnectedParticles from "./ConnectedParticles";

const services = [
  {
    icon: Code2,
    title: "Web Express",
    price: "Consultar",
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
    price: "Consultar",
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
    price: "Consultar",
    description: "Automatizaciones avanzadas totalmente personalizadas para desafíos únicos.",
    features: [
      "Análisis personalizado de necesidades",
      "Desarrollo a medida",
      "Integración con sistemas existentes",
      "Soporte prioritario continuo",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    icon: Settings2,
    title: "Automatización Empresarial",
    price: "Consultar",
    description: "Optimiza los procesos internos de tu negocio con flujos de trabajo inteligentes y eficientes.",
    features: [
      "Integración entre aplicaciones y plataformas",
      "Reducción de tareas manuales",
      "Flujos automatizados personalizables",
      "Ahorro de tiempo y recursos",
    ],
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquareCode,
    title: "Asistente Virtual IA",
    price: "Consultar",
    description: "Asistentes virtuales diseñados para atender, informar y acompañar a tus clientes en tiempo real.",
    features: [
      "Respuestas automáticas personalizadas",
      "Atención multicanal (web, WhatsApp, email)",
      "Gestión de citas y consultas",
      "Disponibilidad 24/7 con IA avanzada",
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
];

// Particles for icon animation
const IconParticles = ({ gradient }: { gradient: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${gradient}`}
          initial={{
            x: Math.random() * 64,
            y: Math.random() * 64,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 64,
              Math.random() * 64,
              Math.random() * 64,
            ],
            y: [
              Math.random() * 64,
              Math.random() * 64,
              Math.random() * 64,
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Services3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      {/* Connected Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ConnectedParticles />
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

        {/* Carousel 3D */}
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl">
            {services.map((service, index) => {
              // Calculate circular offset
              let offset = index - currentIndex;
              if (offset > services.length / 2) offset -= services.length;
              if (offset < -services.length / 2) offset += services.length;
              
              const absOffset = Math.abs(offset);
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  initial={false}
                  animate={{
                    x: offset * 380 - 175,
                    y: -250,
                    scale: absOffset === 0 ? 1.15 : absOffset === 1 ? 0.85 : 0.6,
                    rotateY: offset * 15,
                    z: absOffset === 0 ? 100 : absOffset === 1 ? 50 : 0,
                    opacity: absOffset > 2 ? 0 : absOffset === 2 ? 0.4 : absOffset === 1 ? 0.7 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 35,
                  }}
                  style={{
                    perspective: 1200,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoRotating(false);
                  }}
                >
                  <Card
                    className={`w-[350px] p-6 bg-gradient-card border-border transition-all duration-500 ${
                      absOffset === 0
                        ? "border-brand-purple shadow-purple"
                        : "border-border/50"
                    } ${service.featured && absOffset === 0 ? "ring-2 ring-brand-purple/50" : ""}`}
                  >
                    {service.featured && absOffset === 0 && (
                      <div className="absolute top-4 right-4 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}

                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <IconParticles gradient={service.gradient} />
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
                        <Icon className="w-8 h-8 text-white relative z-10" strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
                    <p className="text-2xl font-bold text-brand-purple mb-3 text-center">
                      {service.price}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-center text-sm">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-xs"
                          initial={{ opacity: 0, x: -20 }}
                          animate={absOffset === 0 ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
                          transition={{ delay: absOffset === 0 ? 0.3 + i * 0.1 : 0 }}
                        >
                          <Check className="w-3 h-3 text-brand-purple mt-0.5 flex-shrink-0" />
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
                        className="w-full bg-brand-purple hover:bg-brand-purple-dark mt-4"
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

          {/* Navigation dots */}
          <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 flex gap-3">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoRotating(false);
                }}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-brand-purple w-8 h-3"
                    : "bg-border hover:bg-brand-purple/50 w-3 h-3"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Ir al servicio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3D;
