import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layout, Type, Image, Square, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Block {
  id: number;
  type: "header" | "text" | "image" | "button";
  added: boolean;
}

const blockTypes = [
  { type: "header" as const, icon: Type, label: "Encabezado", color: "from-blue-500 to-cyan-500" },
  { type: "text" as const, icon: Layout, label: "Texto", color: "from-purple-500 to-pink-500" },
  { type: "image" as const, icon: Image, label: "Imagen", color: "from-green-500 to-emerald-500" },
  { type: "button" as const, icon: Square, label: "Botón", color: "from-orange-500 to-yellow-500" },
];

const WebDevDemo = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);

  const buildWebsite = () => {
    setIsBuilding(true);
    setBlocks([]);

    const sequence = [
      { type: "header" as const, delay: 500 },
      { type: "text" as const, delay: 1000 },
      { type: "image" as const, delay: 1500 },
      { type: "button" as const, delay: 2000 },
    ];

    sequence.forEach((item, index) => {
      setTimeout(() => {
        setBlocks(prev => [...prev, { 
          id: index + 1, 
          type: item.type, 
          added: false 
        }]);
        setTimeout(() => {
          setBlocks(prev => prev.map(block => 
            block.id === index + 1 ? { ...block, added: true } : block
          ));
        }, 100);
        
        if (index === sequence.length - 1) {
          setTimeout(() => setIsBuilding(false), 500);
        }
      }, item.delay);
    });
  };

  const reset = () => {
    setBlocks([]);
  };

  const renderBlock = (block: Block) => {
    switch (block.type) {
      case "header":
        return (
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
            <div className="h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded w-1/2 opacity-60" />
          </div>
        );
      case "text":
        return (
          <div className="bg-card rounded-lg p-6 border border-border space-y-2">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-5/6" />
            <div className="h-3 bg-muted rounded w-4/6" />
          </div>
        );
      case "image":
        return (
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg aspect-video border border-green-500/30 flex items-center justify-center">
            <Image className="w-12 h-12 text-green-500" />
          </div>
        );
      case "button":
        return (
          <div className="flex justify-center p-4">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg px-8 py-3 shadow-lg">
              <span className="text-white font-semibold">Botón de Acción</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-foreground">Constructor de Sitio Web</h3>
        <p className="text-sm text-muted-foreground">
          Observa cómo construimos tu sitio web bloque por bloque
        </p>
      </div>

      {/* Block Types Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {blockTypes.map((blockType) => (
          <div
            key={blockType.type}
            className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border"
          >
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${blockType.color} flex items-center justify-center`}>
              <blockType.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-medium text-foreground">{blockType.label}</span>
          </div>
        ))}
      </div>

      {/* Website Preview */}
      <div className="bg-muted/30 rounded-xl p-4 min-h-[300px] border-2 border-dashed border-border">
        <div className="bg-card rounded-lg p-2 shadow-lg">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 h-6 bg-muted rounded ml-4 px-3 flex items-center">
              <span className="text-xs text-muted-foreground">www.tusitio.com</span>
            </div>
          </div>

          {/* Website Content */}
          <div className="p-4 space-y-4 min-h-[240px]">
            <AnimatePresence mode="popLayout">
              {blocks.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <Plus className="w-12 h-12 text-muted-foreground/30 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Tu sitio web aparecerá aquí
                  </p>
                </motion.div>
              ) : (
                blocks.map((block, index) => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    className="relative"
                  >
                    {renderBlock(block)}
                    {block.added && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <Button
          onClick={buildWebsite}
          disabled={isBuilding || blocks.length > 0}
          className="gap-2"
        >
          <Layout className="w-4 h-4" />
          {isBuilding ? "Construyendo..." : "Construir Sitio"}
        </Button>
        <Button
          onClick={reset}
          variant="outline"
          disabled={isBuilding || blocks.length === 0}
        >
          Reiniciar
        </Button>
      </div>

      {blocks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground">
            {blocks.length}/4 bloques añadidos
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default WebDevDemo;
