import { motion } from "framer-motion";
import { Eye, Target, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="sobre-nosotros" className="relative py-24 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm text-brand-purple-light">
              {t.aboutUs.subtitle}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.aboutUs.title}
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              {t.aboutUs.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-brand-purple/50 transition-all duration-300">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-16 h-16 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-brand-purple" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{t.aboutUs.visionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.aboutUs.visionText}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-brand-purple/50 transition-all duration-300">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-16 h-16 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-brand-purple" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{t.aboutUs.missionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.aboutUs.missionText}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">{t.aboutUs.valuesTitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.aboutUs.values.map((value: any, index: number) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-brand-purple/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                >
                  <Heart className="w-6 h-6 text-brand-purple" />
                </motion.div>
                <h4 className="text-xl font-bold mb-2">{value.name}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default AboutUs;
