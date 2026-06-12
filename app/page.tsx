import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Timeline />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
