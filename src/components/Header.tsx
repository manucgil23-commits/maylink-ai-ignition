import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/maylink-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t.nav.inicio, id: "inicio" },
    { label: t.nav.servicios, id: "servicios" },
    { label: t.nav.porQueElegirnos, id: "por-que-elegirnos" },
    { label: t.nav.faq, id: "faq" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`container mx-auto px-4 transition-all duration-300 flex items-center justify-between ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("inicio")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: isScrolled ? 0.85 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={logo} alt="MayLink AI" className={`transition-all duration-300 ${
            isScrolled ? "w-14 h-14" : "w-20 h-20"
          }`} />
          <span className={`font-bold transition-all duration-300 ${
            isScrolled ? "text-xl" : "text-2xl"
          }`}>
            May<span className="text-brand-purple">Link</span> AI
          </span>
        </motion.div>

        {/* Desktop Menu - Center */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/80 hover:text-brand-purple transition-colors relative group whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Desktop Right Side - Contact and Language */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="icon"
            className="border-brand-purple/50 hover:bg-brand-purple/10"
            aria-label="Toggle language"
          >
            <Languages className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-brand-purple hover:bg-brand-purple-dark transition-all shadow-glow"
          >
            {t.nav.contacto}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="icon"
            className="border-brand-purple/50 hover:bg-brand-purple/10"
            aria-label="Toggle language"
          >
            <Languages className="w-5 h-5" />
          </Button>
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground/80 hover:text-brand-purple transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-brand-purple hover:bg-brand-purple-dark w-full"
            >
              {t.nav.contacto}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
