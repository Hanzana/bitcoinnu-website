import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import WhitePaper from "./pages/WhitePaper";
import Downloads from "./pages/Downloads";
import RoadMap from "./pages/RoadMap";
import FAQ from "./pages/FAQ";
import Innovation from "./pages/Innovation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
