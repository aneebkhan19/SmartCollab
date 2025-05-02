import { useState, useEffect } from "react";
import { Link } from "wouter";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to apply styling to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link text-slate-700 hover:text-primary font-medium transition-colors">Services</a>
            <a href="#process" className="nav-link text-slate-700 hover:text-primary font-medium transition-colors">Process</a>
            <a href="#about" className="nav-link text-slate-700 hover:text-primary font-medium transition-colors">About Us</a>
            <a href="#contact" className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
              Get Started
            </a>
          </div>
          
          <button 
            className="md:hidden text-slate-900 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 py-4 px-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a 
            href="#services" 
            className="text-slate-700 hover:text-primary font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-slate-700 hover:text-primary font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#about" 
            className="text-slate-700 hover:text-primary font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="bg-gradient-primary text-white py-2 px-6 rounded-full font-medium text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
