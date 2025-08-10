import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ArrowNav from "@/components/ArrowNav";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <AppSidebar />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Team />
        <Clients />
        <Contact />
        <Footer />
      </main>
      <ArrowNav />
    </div>
  );
};

export default Index;
