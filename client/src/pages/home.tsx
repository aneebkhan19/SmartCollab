import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import ValueProposition from "@/components/sections/value-proposition";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
//import BackToTop from "@/components/ui/backtotop"; //Removed import

export default function Home() {
  // Initialize reveal effect for elements with class 'reveal'
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const checkReveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkReveal);
    window.addEventListener('resize', checkReveal);

    // Initial check
    checkReveal();

    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* <BackToTop /> */} {/*Removed BackToTop component*/}
    </>
  );
}