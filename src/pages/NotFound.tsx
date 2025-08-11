import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="text-lg text-muted-foreground mt-2">Oops! Página no encontrada</p>
        <Link to="/" className="inline-block mt-6 text-primary underline underline-offset-4">Volver a la tienda</Link>
      </main>
    </div>
  );
};

export default NotFound;
