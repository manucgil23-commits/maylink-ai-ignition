import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Puzzle, Heart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovación continua",
    description: "Aplicamos lo más avanzado en IA para mantener tu negocio a la vanguardia tecnológica.",
  },
  {
    icon: Puzzle,
    title: "Soluciones personalizadas",
    description: "Adaptamos la tecnología a tus objetivos específicos, no al revés.",
  },
  {
    icon: Heart,
    title: "Atención cercana",
    description: "Comunicación directa y humana. Estamos contigo en cada paso del proceso.",
  },
  {
    icon: TrendingUp,
    title: "Resultados medibles",
    description: "Impacto real con datos. Transformamos tu inversión en crecimiento tangible.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="por-que-elegirnos" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              MayLink AI
            </span>
            ?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Más que tecnología, ofrecemos partnership estratégico para tu transformación digital
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full p-6 bg-gradient-card border-border hover:border-brand-purple transition-all duration-300 group hover:shadow-purple hover:-translate-y-2">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-brand-purple" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-purple transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
