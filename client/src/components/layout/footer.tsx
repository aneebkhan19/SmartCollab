export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img src="/images/logo.png" alt="AiVoralabs Logo" className="h-9 brightness-150" />
            </a>
            <p className="text-gray-400 mb-6">
              Building the future of software with AI intelligence. We combine deep tech expertise with artificial intelligence to help businesses scale smarter.
            </p>

          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">AI-Enhanced Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Conversational AI</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Intelligent UI/UX Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">AI Marketing Systems</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Workflow Automation</a></li>
            </ul>
          </div>
          
          <div className="bg-slate-950 p-5 rounded-xl">
            <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors block">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors block">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-primary transition-colors block">Process</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors block">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">I8 Islamabad</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@aivoralabs.com" className="text-gray-400 hover:text-primary transition-colors">info@aivoralabs.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923149458600" className="text-gray-400 hover:text-primary transition-colors">+92 314 9458600</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Aivora Labs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
