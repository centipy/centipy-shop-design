import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import CategoryPage from "./pages/Category";
import ServiciosPage from "./pages/Servicios";
import PlanesPage from "./pages/Planes";
import PlantillasPage from "./pages/Plantillas";
import PlantillaPage from "./pages/Plantilla";
import { CartProvider } from "@/contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/producto/:slug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/categoria/:slug" element={<CategoryPage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/planes" element={<PlanesPage />} />
              <Route path="/plantillas" element={<PlantillasPage />} />
              <Route path="/plantilla/:slug" element={<PlantillaPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
