import { motion } from "framer-motion";
import { useState } from "react";
import { Palette, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

const palettes: ColorPalette[] = [
  {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    accent: "#EC4899",
    background: "#F9FAFB",
    text: "#111827"
  },
  {
    primary: "#10B981",
    secondary: "#059669",
    accent: "#F59E0B",
    background: "#ECFDF5",
    text: "#064E3B"
  },
  {
    primary: "#3B82F6",
    secondary: "#06B6D4",
    accent: "#F97316",
    background: "#EFF6FF",
    text: "#1E3A8A"
  },
  {
    primary: "#8B5CF6",
    secondary: "#A78BFA",
    accent: "#FB923C",
    background: "#FAF5FF",
    text: "#581C87"
  },
  {
    primary: "#EF4444",
    secondary: "#F87171",
    accent: "#FBBF24",
    background: "#FEF2F2",
    text: "#7F1D1D"
  }
];

const BrandingDemo = () => {
  const [currentPalette, setCurrentPalette] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewPalette = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCurrentPalette((prev) => (prev + 1) % palettes.length);
      setIsGenerating(false);
    }, 800);
  };

  const palette = palettes[currentPalette];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-foreground">Generador de Branding</h3>
        <p className="text-sm text-muted-foreground">
          Explora diferentes paletas de colores para tu marca
        </p>
      </div>

      <motion.div
        key={currentPalette}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Logo Preview */}
        <div 
          className="rounded-xl p-8 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: palette.background }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: palette.primary }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-1">
                <h4 
                  className="text-2xl font-bold"
                  style={{ color: palette.text }}
                >
                  TuMarca
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: palette.secondary }}
                >
                  Innovation & Design
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20"
            style={{ backgroundColor: palette.accent }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-20"
            style={{ backgroundColor: palette.secondary }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Color Palette Display */}
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(palette).map(([name, color], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="space-y-2"
            >
              <div
                className="aspect-square rounded-lg shadow-md border border-border/50 hover:scale-110 transition-transform cursor-pointer"
                style={{ backgroundColor: color }}
              />
              <div className="text-center">
                <p className="text-xs font-medium text-foreground capitalize">
                  {name}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  {color}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Card Preview */}
        <div 
          className="rounded-lg p-6 border shadow-md relative overflow-hidden"
          style={{ 
            backgroundColor: palette.background,
            borderColor: palette.primary + "40"
          }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: palette.primary }}
              >
                <Palette className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-bold text-sm"
                style={{ color: palette.text }}
              >
                TuMarca
              </span>
            </div>
            <div className="space-y-1">
              <p 
                className="text-xs font-medium"
                style={{ color: palette.text }}
              >
                Juan Pérez
              </p>
              <p 
                className="text-xs"
                style={{ color: palette.secondary }}
              >
                CEO & Founder
              </p>
            </div>
            <div 
              className="h-px w-full"
              style={{ backgroundColor: palette.primary + "40" }}
            />
            <div className="space-y-1 text-xs" style={{ color: palette.text }}>
              <p>contacto@tumarca.com</p>
              <p>+34 600 000 000</p>
            </div>
          </div>
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: palette.accent }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      <div className="flex justify-center">
        <Button
          onClick={generateNewPalette}
          disabled={isGenerating}
          className="gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
          {isGenerating ? "Generando..." : "Generar Nueva Paleta"}
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        Generamos paletas de colores profesionales y coherentes para tu marca
      </p>
    </div>
  );
};

export default BrandingDemo;
