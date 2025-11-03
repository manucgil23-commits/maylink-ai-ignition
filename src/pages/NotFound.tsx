import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-brand-purple">404</h1>
        <p className="mb-4 text-xl text-foreground">Oops! Página no encontrada</p>
        <a href="/" className="text-brand-purple underline hover:text-brand-purple-light transition-colors">
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
