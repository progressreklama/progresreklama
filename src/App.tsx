import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Produkti from "./pages/Produkti";
import ProduktDetail from "./pages/ProduktDetail";
import ZaNas from "./pages/ZaNas";
import Galeria from "./pages/Galeria";
import Ceni from "./pages/Ceni";
import Blog from "./pages/Blog";
import Kontakti from "./pages/Kontakti";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/produkti" element={<Produkti />} />
            <Route path="/produkt/:slug" element={<ProduktDetail />} />
            <Route path="/za-nas" element={<ZaNas />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/ceni" element={<Ceni />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kontakti" element={<Kontakti />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
