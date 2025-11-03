import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import logo from "@/assets/maylink-logo.png";
import TypewriterText from "./TypewriterText";
import RobotBuilder from "./RobotBuilder";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-brand-purple" />
              <span className="text-sm text-brand-purple-light">
                Innovación en Automatización
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TypewriterText 
                text="Conectando con "
                delay={300}
              />
              <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
                <TypewriterText 
                  text="posibilidades infinitas"
                  delay={900}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Creamos automatizaciones con inteligencia artificial que impulsan tu negocio
              hacia el futuro. Soluciones personalizadas que transforman ideas en realidad.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("servicios")}
                className="bg-brand-purple hover:bg-brand-purple-dark text-white shadow-purple group"
              >
                Explorar servicios
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10"
              >
                Solicitar presupuesto
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Logo with Robot Building */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg mx-auto h-[500px]">
              {/* Main Logo - being built */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={logo}
                  alt="MayLink AI"
                  className="w-80 h-80 relative z-10"
                />

                {/* Logo Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl bg-brand-purple/30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Building Progress Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{ duration: 4, delay: 1 }}
                >
                  <img
                    src={logo}
                    alt="MayLink AI Building"
                    className="w-80 h-80"
                  />
                </motion.div>

                {/* Pulse Effect when complete */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 5,
                  }}
                  style={{
                    background:
                      "radial-gradient(circle, hsl(277 100% 62% / 0.4) 0%, transparent 70%)",
                  }}
                />
              </motion.div>

              {/* Robot Builder Component */}
              <RobotBuilder />

              {/* Circuit Lines around Logo */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 5 }}
              >
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  const startRadius = 120;
                  const endRadius = 200;
                  const x1 = 250 + startRadius * Math.cos((angle * Math.PI) / 180);
                  const y1 = 250 + startRadius * Math.sin((angle * Math.PI) / 180);
                  const x2 = 250 + endRadius * Math.cos((angle * Math.PI) / 180);
                  const y2 = 250 + endRadius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="hsl(277 100% 62%)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 2 + i * 0.2,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Floating Tech Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 border-2 border-brand-purple"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    rotate: 360,
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-brand-purple rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-brand-purple rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
