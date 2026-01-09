import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import OverviewSection from "./components/sections/OverviewSection";
import AboutSection from "./components/sections/AboutSection";
import ToolsSection from "./components/sections/ToolsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import AppPromotion from "./components/sections/AppPromotion";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-1">
          <OverviewSection />
          <AboutSection />
          <ToolsSection />
          <TestimonialsSection />
          <AppPromotion />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
