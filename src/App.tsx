
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Tracks from "./pages/Tracks";
import Speakers from "./pages/Speakers";
import Dates from "./pages/Dates";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Update from "./pages/Update";
import Papers from "./pages/Papers";
import Awards from "./pages/Awards";
import Sponsors from "./pages/Sponsors";
import { Committee } from "./pages/Committee";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/update" element={<Update />} />
          <Route path="/paper" element={<Papers />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/sponsors" element={<Sponsors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
