import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, CheckCircle, Folder, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Email {
  id: number;
  subject: string;
  sender: string;
  priority: "high" | "medium" | "low";
  organized: boolean;
  folder?: string;
}

const AutomationDemo = () => {
  const [emails, setEmails] = useState<Email[]>([
    { id: 1, subject: "Factura pendiente - URGENTE", sender: "proveedor@empresa.com", priority: "high", organized: false },
    { id: 2, subject: "Reunión de equipo", sender: "manager@empresa.com", priority: "medium", organized: false },
    { id: 3, subject: "Newsletter semanal", sender: "marketing@empresa.com", priority: "low", organized: false },
    { id: 4, subject: "Cliente solicita cotización", sender: "cliente@empresa.com", priority: "high", organized: false },
    { id: 5, subject: "Actualización del sistema", sender: "ti@empresa.com", priority: "medium", organized: false },
  ]);
  const [isOrganizing, setIsOrganizing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const organize = () => {
    setIsOrganizing(true);
    setCurrentStep(0);
    
    const steps = [
      { delay: 500, action: () => organizeEmail(0, "Urgente") },
      { delay: 1000, action: () => organizeEmail(3, "Clientes") },
      { delay: 1500, action: () => organizeEmail(1, "Interno") },
      { delay: 2000, action: () => organizeEmail(4, "IT") },
      { delay: 2500, action: () => organizeEmail(2, "Marketing") },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        step.action();
        setCurrentStep(index + 1);
        if (index === steps.length - 1) {
          setTimeout(() => setIsOrganizing(false), 500);
        }
      }, step.delay);
    });
  };

  const organizeEmail = (index: number, folder: string) => {
    setEmails(prev => prev.map((email, i) => 
      i === index ? { ...email, organized: true, folder } : email
    ));
  };

  const reset = () => {
    setEmails(emails.map(email => ({ ...email, organized: false, folder: undefined })));
    setCurrentStep(0);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-foreground">Automatización de Emails</h3>
        <p className="text-sm text-muted-foreground">
          Observa cómo la IA organiza automáticamente tu bandeja de entrada
        </p>
      </div>

      <div className="bg-muted/30 rounded-lg p-4 space-y-2 max-h-[300px] overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {emails.map((email, index) => (
            <motion.div
              key={email.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: email.organized ? 0.98 : 1
              }}
              exit={{ opacity: 0, x: 20 }}
              className={`p-3 rounded-lg border transition-all ${
                email.organized 
                  ? 'bg-green-500/10 border-green-500/50' 
                  : 'bg-card border-border'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <Mail className={`w-4 h-4 mt-0.5 ${
                    email.priority === 'high' ? 'text-red-500' :
                    email.priority === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {email.subject}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {email.sender}
                    </p>
                  </div>
                </div>
                
                {email.organized ? (
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-green-500">
                      {email.folder}
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                ) : (
                  <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 justify-center">
        <Button
          onClick={organize}
          disabled={isOrganizing || emails.every(e => e.organized)}
          className="bg-primary hover:bg-primary/90"
        >
          {isOrganizing ? "Organizando..." : "Iniciar Automatización"}
        </Button>
        <Button
          onClick={reset}
          variant="outline"
          disabled={isOrganizing}
        >
          Reiniciar
        </Button>
      </div>

      {currentStep > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground">
            {currentStep}/{emails.length} emails organizados
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AutomationDemo;
