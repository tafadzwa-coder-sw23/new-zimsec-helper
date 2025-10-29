import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Lesson from "./pages/Lesson";
import Exams from "./pages/Exams";
import PastPapers from "./pages/PastPapers";
import Flashcards from "./pages/Flashcards";
import Tutor from "./pages/Tutor";

import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import PaperView from "./pages/PaperView";
import FlashcardReview from "./pages/FlashcardReview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subject/:id" element={<Lesson />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/past-papers" element={<PastPapers />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/paper/:id" element={<PaperView />} />
            <Route path="/flashcards/:id" element={<FlashcardReview />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
