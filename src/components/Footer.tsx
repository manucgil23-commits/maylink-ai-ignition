import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import logo from "@/assets/maylink-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="MayLink AI" className="w-12 h-12" />
              <span className="text-2xl font-bold">
                May<span className="text-brand-purple">Link</span> AI
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-brand-purple/20 flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-brand-purple transition-colors" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-brand-purple/20 flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-brand-purple transition-colors" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-brand-purple/20 flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-brand-purple transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:maylinkai00@gmail.com"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-brand-purple/20 flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-brand-purple transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-muted-foreground hover:text-brand-purple transition-colors text-left"
              >
                {t.nav.inicio}
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-muted-foreground hover:text-brand-purple transition-colors text-left"
              >
                {t.nav.servicios}
              </button>
              <button
                onClick={() => scrollToSection("por-que-elegirnos")}
                className="text-muted-foreground hover:text-brand-purple transition-colors text-left"
              >
                {t.nav.porQueElegirnos}
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-muted-foreground hover:text-brand-purple transition-colors text-left"
              >
                {t.nav.contacto}
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.legal}</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">
                {t.footer.legalNotice}
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">
                {t.footer.cookies}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} MayLink AI — {t.footer.copyright}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footer.madeWith}{" "}
              <span className="text-brand-purple">❤</span> {t.footer.madeIn}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
